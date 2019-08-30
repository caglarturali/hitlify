<script>
  import FileSaver from "file-saver";

  import {
    width,
    height,
    fontSize,
    maxLength,
    backgroundColor,
    fontColor,
    fontFamily,
    count
  } from "../stores.js";

  import TileBox from "../components/TileBox.svelte";
  import { svgAsText } from "../lib/utils.js";

  $: svgString = svgAsText(
    $width,
    $height,
    $fontSize,
    $maxLength,
    $backgroundColor,
    $fontColor,
    $fontFamily,
    $count
  );

  function downloadSvg() {
    var blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    FileSaver.saveAs(blob, "counter.svg");
  }
</script>

<style>
  .svg-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%; /* ? */
    user-select: none;
  }
</style>

<TileBox title="Preview">
  <figure class="image svg-preview">
    {@html svgString}
  </figure>

  <hr />
  <div class="field is-grouped is-grouped-centered">

    <p class="control">
      <button
        class="button is-light has-icons has-icons-left"
        on:click={() => downloadSvg()}>
        <span class="icon">
          <i class="fas fa-download" />
        </span>
        <p>Download SVG</p>
      </button>
    </p>

  </div>
</TileBox>
