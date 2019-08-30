<script>
  import ColorPicker from "./ColorPicker.svelte";
  import NumericInput from "./NumericInput.svelte";

  import {
    width,
    height,
    fontSize,
    maxLength,
    backgroundColor,
    fontColor,
    fontFamily
  } from "../stores.js";

  const fonts = [
    "Arial, Helvetica, sans-serif",
    "Times New Roman, Times, serif",
    "Courier New, Courier, monospace"
  ];
</script>

<style>
  .field-label {
    flex-grow: 2;
  }
</style>

<div class="tile is-child box">
  <p class="subtitle">Options</p>
  <hr />

  <ColorPicker label="Background color" bind:value={$backgroundColor} />
  <ColorPicker label="Font color" bind:value={$fontColor} />

  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Font family</label>
    </div>
    <div class="field-body">
      <div class="field is-narrow">
        <div class="control">
          <div class="select is-fullwidth">
            <select bind:value={$fontFamily}>
              {#each fonts as font}
                <option value={font}>{font}</option>
              {/each}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <NumericInput label="Font size" max={50} bind:value={$fontSize} />
  <NumericInput label="Max digits" max={13} bind:value={$maxLength} />
  <NumericInput label="Width" max={600} bind:value={$width} />
  <NumericInput label="Height" max={600} bind:value={$height} />

  <div class="field is-horizontal">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>
</div>
