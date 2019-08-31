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
  .preview-container {
    height: 70%; /* ? */
  }

  .centered-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .svg-preview {
    transition: all 500ms ease;
    overflow: hidden;
  }
</style>

<TileBox title="Preview">

  <!-- {@html svgString} - Use fake svg preview for easy animations -->
  <div class="preview-container centered-flex">
    <div
      class="svg-preview centered-flex"
      style="width: {$width}px; height: {$height}px; background-color: {$backgroundColor}">
      <p
        class="svg-preview"
        style="color: {$fontColor}; font-family: {$fontFamily}; font-size: {$fontSize}px;">
        {$count.toString().padStart($maxLength, '0')}
      </p>
    </div>
  </div>

  <hr />
  <div class="field is-grouped is-grouped-centered">
    <p class="control">
      <button
        class="button is-light has-icons has-icons-left"
        on:click={() => downloadSvg()}
        title="You don't need to download the SVG to be able to use the counter!">
        <span class="icon">
          <i class="fas fa-download" />
        </span>
        <p>Download SVG</p>
      </button>
    </p>
  </div>
</TileBox>
