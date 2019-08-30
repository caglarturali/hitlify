<script>
  import TileBox from "../components/TileBox.svelte";
  import ColorPicker from "../components/ColorPicker.svelte";
  import NumericInput from "../components/NumericInput.svelte";

  import { randomNumber, randomColor } from "../lib/utils.js";

  import {
    width,
    height,
    fontSize,
    maxLength,
    backgroundColor,
    fontColor,
    fontFamily
  } from "../stores.js";

  const handleRandomizeClick = () => {
    width.set(randomNumber(600));
    height.set(randomNumber(600));
    fontSize.set(randomNumber(50));
    maxLength.set(randomNumber(13));
    backgroundColor.set(randomColor());
    fontColor.set(randomColor());
  };

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

<TileBox title="Options">

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

  <hr />
  <div class="field is-grouped is-grouped-centered">

    <p class="control">
      <button
        class="button is-light has-icons has-icons-left"
        on:click={() => handleRandomizeClick()}>
        <span class="icon">
          <i class="fas fa-random" />
        </span>
        <p>Randomize All</p>
      </button>
    </p>
    <p class="control">
      <button class="button is-primary has-icons has-icons-left">
        <span class="icon">
          <i class="fas fa-space-shuttle" />
        </span>
        <p>Generate</p>
      </button>
    </p>

  </div>
</TileBox>
