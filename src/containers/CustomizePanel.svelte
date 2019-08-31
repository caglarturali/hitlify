<script>
  import {
    width,
    height,
    fontSize,
    maxLength,
    backgroundColor,
    fontColor,
    fontFamily,
    fonts,
    isLoading,
    isAllowedToCreateNew,
    showResultsPanel,
    response
  } from "../stores.js";
  import defaults from "../data/defaults.json";

  import TileBox from "../components/TileBox.svelte";
  import ColorPicker from "../components/ColorPicker.svelte";
  import NumericInput from "../components/NumericInput.svelte";
  import FontSelector from "../components/FontSelector.svelte";

  import { randomNumber, randomColor } from "../lib/utils.js";
  import { API_BASE } from "../shared.js";

  const handleRandomizeClick = () => {
    width.set(randomNumber(600));
    height.set(randomNumber(600));
    fontSize.set(randomNumber(50));
    maxLength.set(randomNumber(13));
    backgroundColor.set(randomColor());
    fontColor.set(randomColor());

    // Code duplication - refactor
    const randomFontIndex = Math.floor(Math.random() * $fonts.length);
    fontFamily.set($fonts[randomFontIndex]);
  };

  const handleResetClick = () => {
    width.set(defaults.width);
    height.set(defaults.height);
    fontSize.set(defaults.fontSize);
    maxLength.set(defaults.maxLength);
    backgroundColor.set(defaults.backgroundColor);
    fontColor.set(defaults.fontColor);
    fontFamily.set(defaults.fontFamily);
  };

  const handleGenerateCounter = async () => {
    isLoading.set(true);

    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/${API_BASE}/counters`,
      {
        method: "post",
        body: JSON.stringify({
          width: $width,
          height: $height,
          fontSize: $fontSize,
          maxLength: $maxLength,
          backgroundColor: $backgroundColor,
          fontColor: $fontColor,
          fontFamily: $fontFamily
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const json = await res.json();

    if (res.ok) {
      isAllowedToCreateNew.set(false);
      response.set(json);
      showResultsPanel.set(true);
    }

    isLoading.set(false);
  };
</script>

<style>

</style>

<TileBox title="Customize">

  <ColorPicker label="Background color" bind:value={$backgroundColor} />
  <ColorPicker label="Font color" bind:value={$fontColor} />
  <FontSelector label="Font family" />
  <NumericInput label="Font size" max={50} bind:value={$fontSize} />
  <NumericInput label="Max digits" max={13} bind:value={$maxLength} />
  <NumericInput label="Width" max={600} bind:value={$width} />
  <NumericInput label="Height" max={600} bind:value={$height} />

  <hr />
  <div class="field is-grouped is-grouped-centered">

    <p class="control">
      <button
        class="button is-light has-icons has-icons-left"
        class:is-static={!$isAllowedToCreateNew || $isLoading}
        on:click={() => handleRandomizeClick()}>
        <span class="icon">
          <i class="fas fa-random" />
        </span>
        <p>Randomize All</p>
      </button>
    </p>

    <p class="control">
      <button
        class="button is-light has-icons has-icons-left"
        class:is-static={!$isAllowedToCreateNew || $isLoading}
        on:click={() => handleResetClick()}>
        <span class="icon">
          <i class="fas fa-redo" />
        </span>
        <p>Reset</p>
      </button>
    </p>

    <p class="control">
      <button
        class="button is-primary has-icons has-icons-left"
        class:is-static={!$isAllowedToCreateNew}
        class:is-loading={$isLoading}
        on:click={() => handleGenerateCounter()}>
        >
        <span class="icon">
          <i class="fas fa-space-shuttle" />
        </span>
        <p>Generate Counter</p>
      </button>
    </p>

  </div>
</TileBox>
