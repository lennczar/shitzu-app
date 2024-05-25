import { derived, readable, type Readable } from "svelte/store";

import type { FungibleTokenMetadata } from "$lib/abi";
import BlackDragonLogo from "$lib/assets/logo/blackdragon.png";

export type TokenInfo = {
  price: string;
  decimal: number;
  symbol: string;
  icon?: string | null;
};

const refPrices$ = readable<
  Promise<{
    [token_address: string]: TokenInfo | undefined;
  }>
>(new Promise<never>(() => {}), (set) => {
  const interval = setInterval(() => {
    fetchData();
  }, 30_000);

  fetchData();

  function fetchData() {
    fetch("https://api.ref.finance/list-token-price")
      .then((res) => res.json())
      .then((data) => {
        set(data);
      });
  }
  return () => clearInterval(interval);
});

const tokenPrices: Record<string, Readable<Promise<TokenInfo>> | undefined> =
  {};

const poolIds: Record<string, string> = {
  "avb.tkn.near": "20",
  "intel.tkn.near": "4663",
};

export function getToken$(tokenId: string): Readable<Promise<TokenInfo>> {
  if (tokenPrices[tokenId] == null) {
    tokenPrices[tokenId] = derived(refPrices$, async (r) => {
      const refPrices = await r;
      const metadata = await fetchMetadata(tokenId);
      if (!metadata) {
        throw new Error();
      }
      if (tokenId === "blackdragon.tkn.near") {
        metadata.icon = BlackDragonLogo;
      }
      if (refPrices[tokenId] != null) {
        return {
          icon: metadata.icon,
          ...refPrices[tokenId]!,
        };
      }
      return fetch(
        `https://api.dexscreener.com/latest/dex/pairs/near/refv1-${poolIds[tokenId]}`,
      ).then(async (res) => {
        if (!res.ok) {
          return {
            price: "0",
            decimal: metadata.decimals,
            symbol: metadata.symbol,
            icon: metadata.icon,
          } satisfies TokenInfo;
        }
        const data = await res.json();
        try {
          return {
            price: data.pairs[0].priceUsd,
            decimal: metadata.decimals,
            symbol: metadata.symbol,
            icon: metadata.icon,
          } satisfies TokenInfo;
        } catch (err) {
          return {
            price: "0",
            decimal: metadata.decimals,
            symbol: metadata.symbol,
            icon: metadata.icon,
          } satisfies TokenInfo;
        }
      }) as Promise<TokenInfo>;
    });
  }
  return tokenPrices[tokenId]!;
}

export function getToken(tokenId: string) {
  return new Promise<TokenInfo>((resolve) => {
    getToken$(tokenId).subscribe((token) => resolve(token));
  });
}

async function fetchMetadata(
  tokenId: string,
): Promise<FungibleTokenMetadata | undefined> {
  const res = await fetch(import.meta.env.VITE_NODE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "dontcare",
      method: "query",
      params: {
        request_type: "call_function",
        finality: "final",
        account_id: tokenId,
        method_name: "ft_metadata",
        args_base64: "",
      },
    }),
  });
  const json = await res.json();
  if (!json.result) return;
  const result = new Uint8Array(json.result.result);
  const decoder = new TextDecoder();
  const nep141Metadata = JSON.parse(
    decoder.decode(result),
  ) as FungibleTokenMetadata;
  return nep141Metadata;
}
