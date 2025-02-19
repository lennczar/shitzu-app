<script lang="ts">
  import { onMount } from "svelte";

  import {
    widget,
    type ChartingLibraryWidgetOptions,
    type LanguageCode,
    type ResolutionString,
  } from "$lib/charting_library";
  import type { Meme } from "$lib/models/memecooking";
  import MemeCookingDataFeed from "$lib/models/memecooking/datafeed";

  export let memebid: Meme;

  let width: number, height: number;
  let ref: HTMLDivElement;
  function getLanguageFromURL(): LanguageCode | null {
    const regex = new RegExp("[\\?&]lang=([^&#]*)");
    const results = regex.exec(window.location.search);
    return results === null
      ? null
      : (decodeURIComponent(results[1].replace(/\+/g, " ")) as LanguageCode);
  }

  onMount(() => {
    if (width && height && ref) {
      const now = Date.now();
      const to = Math.min(now, memebid.end_timestamp_ms!);

      let interval: ResolutionString;
      const duration = to - memebid.created_timestamp_ms!;

      const aspectRatio = width / height || 1;
      const bars = Math.round(aspectRatio * 48);
      let from;
      if (duration < 10 * 60 * 1000) {
        interval = "1" as ResolutionString;
        from = to - bars * 60 * 1000;
      } else if (duration < 8 * 60 * 60 * 1000) {
        interval = "2" as ResolutionString;
        from = to - bars * 2 * 60 * 1000;
      } else {
        interval = "15" as ResolutionString;
        from = to - bars * 15 * 60 * 1000;
      }

      const timeframe = {
        from: ~~(from / 1000),
        to: ~~(to / 1000),
      };

      const widgetOptions: ChartingLibraryWidgetOptions = {
        theme: "dark",
        symbol: memebid.meme_id.toString(),
        time_frames: [
          { text: "1m", resolution: "1" },
          { text: "2m", resolution: "2" },
          { text: "15m", resolution: "15" },
          { text: "30m", resolution: "30" },
          { text: "1h", resolution: "60" },
          { text: "2h", resolution: "120" },
        ] as { text: string; resolution: ResolutionString }[],
        // BEWARE: no trailing slash is expected in feed URL
        datafeed: MemeCookingDataFeed,
        interval,
        container: ref,
        library_path: "/charting_library/",
        locale: getLanguageFromURL() || "en",
        disabled_features: [
          "symbol_search_hot_key",
          "header_quick_search",
          "header_symbol_search",
          "header_screenshot",
          "header_saveload",
          "header_indicators",
          "header_widget",
          "left_toolbar",
        ],
        enabled_features: [],
        charts_storage_url: "https://saveload.tradingview.com",
        charts_storage_api_version: "1.1",
        client_id: "tradingview.com",
        user_id: "public_user_id",
        autosize: true,
        timeframe,
        width,
        height,
        custom_formatters: {
          priceFormatterFactory: () => ({
            format: (price: number) => {
              if (!price) return "0";
              if (price < 0.0001) {
                return price.toExponential(2);
              }
              return price.toFixed(4);
            },
          }),
        },
      };

      const chart = new widget(widgetOptions);

      chart.onChartReady(() => {
        const priceScale = chart
          .activeChart()
          .getPanes()[0]
          .getMainSourcePriceScale();

        if (priceScale) {
          priceScale.setAutoScale(true);
        }
      });
    }
  });
</script>

{#key memebid.meme_id}
  <div class="flex flex-col flex-1 w-full h-full relative">
    <div
      class="flex flex-col flex-1 h-full w-full [&>*]:flex-1"
      bind:this={ref}
      bind:clientHeight={height}
      bind:clientWidth={width}
    ></div>
  </div>
{/key}
