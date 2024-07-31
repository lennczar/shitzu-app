/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns latest indexed block height */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description latest indexed block height */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              last_block_height: number;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/meme/king": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns the king meme */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description king meme */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              meme_id: number;
              owner: string;
              end_timestamp_ms: number | null;
              name: string;
              symbol: string;
              decimals: number;
              total_supply?: string | null;
              reference: string;
              reference_hash: string;
              deposit_token_id: string;
              last_change_ms: number;
              total_supply_num: number;
              created_blockheight: number;
              created_timestamp_ms: number;
              total_deposit: string;
              total_deposit_num: number;
              total_deposit_fees: string;
              total_deposit_fees_num: number;
              total_withdraw_fees: string;
              total_withdraw_fees_num: number;
              is_finalized?: boolean | null;
              token_id?: string | null;
              pool_id?: number | null;
              description?: string | null;
              twitterLink?: string | null;
              telegramLink?: string | null;
              website?: string | null;
              image?: string | null;
              coronated_at_ms?: number | null;
              telegram_discussion_id: string;
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/meme": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns all meme token launches */
    get: {
      parameters: {
        query?: {
          order_by?:
            | "last_change_ms"
            | "meme_id"
            | "end_timestamp_ms"
            | "created_blockheight"
            | "total_deposit_num"
            | "total_deposit_fees_num"
            | "total_withdraw_fees_num";
          order_by_direction?: "asc" | "desc";
          is_finalized?: boolean | null;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description meme token launches */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              meme_id: number;
              owner: string;
              end_timestamp_ms: number | null;
              name: string;
              symbol: string;
              decimals: number;
              total_supply?: string | null;
              reference: string;
              reference_hash: string;
              deposit_token_id: string;
              last_change_ms: number;
              total_supply_num: number;
              created_blockheight: number;
              created_timestamp_ms: number;
              total_deposit: string;
              total_deposit_num: number;
              total_deposit_fees: string;
              total_deposit_fees_num: number;
              total_withdraw_fees: string;
              total_withdraw_fees_num: number;
              is_finalized?: boolean | null;
              token_id?: string | null;
              pool_id?: number | null;
              description?: string | null;
              twitterLink?: string | null;
              telegramLink?: string | null;
              website?: string | null;
              image?: string | null;
              coronated_at_ms?: number | null;
              telegram_discussion_id: string;
            }[];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/meme/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns a meme token launch by id */
    get: {
      parameters: {
        query?: {
          accountId?: string;
        };
        header?: never;
        path: {
          id: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description meme token launch by id */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              meme: {
                meme_id: number;
                owner: string;
                end_timestamp_ms: number | null;
                name: string;
                symbol: string;
                decimals: number;
                total_supply?: string | null;
                reference: string;
                reference_hash: string;
                deposit_token_id: string;
                last_change_ms: number;
                total_supply_num: number;
                created_blockheight: number;
                created_timestamp_ms: number;
                total_deposit: string;
                total_deposit_num: number;
                total_deposit_fees: string;
                total_deposit_fees_num: number;
                total_withdraw_fees: string;
                total_withdraw_fees_num: number;
                is_finalized?: boolean | null;
                token_id?: string | null;
                pool_id?: number | null;
                description?: string | null;
                twitterLink?: string | null;
                telegramLink?: string | null;
                website?: string | null;
                image?: string | null;
                coronated_at_ms?: number | null;
                telegram_discussion_id: string;
              };
              account?: {
                id: string;
                meme_id: number;
                account_id: string;
                balance: string;
                balance_num: number;
              };
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/trades": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** @description Returns all trades for given meme ID */
    get: {
      parameters: {
        query: {
          meme_id: string;
          account_id?: string;
          direction?: "deposits" | "withdrawals";
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description trades */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              meme_id: number;
              account_id: string;
              amount: string;
              fee: string;
              is_deposit: boolean;
              amount_num: number;
              fee_num: number;
              timestamp_ms: number;
              receipt_id: string;
            }[];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/tradingview/history": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** @description Returns OHLC data for given symbol and time range */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "application/json": {
            meme_id: string;
            from: number;
            to: number;
            resolution: string;
            countBack: number;
          };
        };
      };
      responses: {
        /** @description OHLC data */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              open: number;
              high: number;
              low: number;
              close: number;
              volume: number;
              time: number;
            }[];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/profile/{accountId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get profile
     * @description Get profile
     */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          accountId: string;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description return data related to accountId */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              accountId: string;
              virtual_coins: {
                id: string;
                meme_id: number;
                account_id: string;
                balance: string;
                balance_num: number;
                owner: string;
                end_timestamp_ms: number | null;
                name: string;
                symbol: string;
                decimals: number;
                total_supply?: string | null;
                reference: string;
                reference_hash: string;
                deposit_token_id: string;
                last_change_ms: number;
                total_supply_num: number;
                created_blockheight: number;
                created_timestamp_ms: number;
                total_deposit: string;
                total_deposit_num: number;
                total_deposit_fees: string;
                total_deposit_fees_num: number;
                total_withdraw_fees: string;
                total_withdraw_fees_num: number;
                is_finalized?: boolean | null;
                token_id?: string | null;
                pool_id?: number | null;
                description?: string | null;
                twitterLink?: string | null;
                telegramLink?: string | null;
                website?: string | null;
                image?: string | null;
                coronated_at_ms?: number | null;
                telegram_discussion_id: string;
              }[];
              coins_held: {
                id: string;
                meme_id: number;
                account_id: string;
                balance: string;
                balance_num: number;
                owner: string;
                end_timestamp_ms: number | null;
                name: string;
                symbol: string;
                decimals: number;
                total_supply?: string | null;
                reference: string;
                reference_hash: string;
                deposit_token_id: string;
                last_change_ms: number;
                total_supply_num: number;
                created_blockheight: number;
                created_timestamp_ms: number;
                total_deposit: string;
                total_deposit_num: number;
                total_deposit_fees: string;
                total_deposit_fees_num: number;
                total_withdraw_fees: string;
                total_withdraw_fees_num: number;
                is_finalized?: boolean | null;
                token_id?: string | null;
                pool_id?: number | null;
                description?: string | null;
                twitterLink?: string | null;
                telegramLink?: string | null;
                website?: string | null;
                image?: string | null;
                coronated_at_ms?: number | null;
                telegram_discussion_id: string;
              }[];
              coin_created: {
                meme_id: number;
                owner: string;
                end_timestamp_ms: number | null;
                name: string;
                symbol: string;
                decimals: number;
                total_supply?: string | null;
                reference: string;
                reference_hash: string;
                deposit_token_id: string;
                last_change_ms: number;
                total_supply_num: number;
                created_blockheight: number;
                created_timestamp_ms: number;
                total_deposit: string;
                total_deposit_num: number;
                total_deposit_fees: string;
                total_deposit_fees_num: number;
                total_withdraw_fees: string;
                total_withdraw_fees_num: number;
                is_finalized?: boolean | null;
                token_id?: string | null;
                pool_id?: number | null;
                description?: string | null;
                twitterLink?: string | null;
                telegramLink?: string | null;
                website?: string | null;
                image?: string | null;
                coronated_at_ms?: number | null;
                telegram_discussion_id: string;
              }[];
            };
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** @description Returns meme and token information for given meme_id and token_id arrays */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "application/json": {
            meme_id: string[];
            token_id: string[];
            account_id: string;
          };
        };
      };
      responses: {
        /** @description Meme and token information */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              meme_info: {
                [key: string]:
                  | {
                      meme_id: number;
                      owner: string;
                      end_timestamp_ms: number | null;
                      name: string;
                      symbol: string;
                      decimals: number;
                      total_supply?: string | null;
                      reference: string;
                      reference_hash: string;
                      deposit_token_id: string;
                      last_change_ms: number;
                      total_supply_num: number;
                      created_blockheight: number;
                      created_timestamp_ms: number;
                      total_deposit: string;
                      total_deposit_num: number;
                      total_deposit_fees: string;
                      total_deposit_fees_num: number;
                      total_withdraw_fees: string;
                      total_withdraw_fees_num: number;
                      is_finalized?: boolean | null;
                      token_id?: string | null;
                      pool_id?: number | null;
                      description?: string | null;
                      twitterLink?: string | null;
                      telegramLink?: string | null;
                      website?: string | null;
                      image?: string | null;
                      coronated_at_ms?: number | null;
                      telegram_discussion_id: string;
                    }
                  | undefined;
              };
              token_info: {
                [key: string]:
                  | {
                      meme_id: number;
                      owner: string;
                      end_timestamp_ms: number | null;
                      name: string;
                      symbol: string;
                      decimals: number;
                      total_supply?: string | null;
                      reference: string;
                      reference_hash: string;
                      deposit_token_id: string;
                      last_change_ms: number;
                      total_supply_num: number;
                      created_blockheight: number;
                      created_timestamp_ms: number;
                      total_deposit: string;
                      total_deposit_num: number;
                      total_deposit_fees: string;
                      total_deposit_fees_num: number;
                      total_withdraw_fees: string;
                      total_withdraw_fees_num: number;
                      is_finalized?: boolean | null;
                      token_id?: string | null;
                      pool_id?: number | null;
                      description?: string | null;
                      twitterLink?: string | null;
                      telegramLink?: string | null;
                      website?: string | null;
                      image?: string | null;
                      coronated_at_ms?: number | null;
                      telegram_discussion_id: string;
                    }
                  | undefined;
              };
              coinsCreated: {
                meme_id: number;
                owner: string;
                end_timestamp_ms: number | null;
                name: string;
                symbol: string;
                decimals: number;
                total_supply?: string | null;
                reference: string;
                reference_hash: string;
                deposit_token_id: string;
                last_change_ms: number;
                total_supply_num: number;
                created_blockheight: number;
                created_timestamp_ms: number;
                total_deposit: string;
                total_deposit_num: number;
                total_deposit_fees: string;
                total_deposit_fees_num: number;
                total_withdraw_fees: string;
                total_withdraw_fees_num: number;
                is_finalized?: boolean | null;
                token_id?: string | null;
                pool_id?: number | null;
                description?: string | null;
                twitterLink?: string | null;
                telegramLink?: string | null;
                website?: string | null;
                image?: string | null;
                coronated_at_ms?: number | null;
                telegram_discussion_id: string;
              }[];
            };
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: never;
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
