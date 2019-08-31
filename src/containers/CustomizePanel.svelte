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
    width.set(defaults.width.value);
    height.set(defaults.height.value);
    fontSize.set(defaults.fontSize.value);
    maxLength.set(defaults.maxLength.value);
    backgroundColor.set(defaults.backgroundColor.value);
    fontColor.set(defaults.fontColor.value);
    fontFamily.set(defaults.fontFamily.value);
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

  $: numbersValid = !(
    isNaN($width) ||
    $width > defaults.width.max ||
    $width < 1 ||
    isNaN($height) ||
    $height > defaults.height.max ||
    $height < 1 ||
    isNaN($fontSize) ||
    $fontSize > defaults.fontSize.max ||
    $fontSize < 1 ||
    isNaN($maxLength) ||
    $maxLength > defaults.maxLength.max ||
    $maxLength < 1
  );
</script>

<style>

</style>

<TileBox title="Customize">

  <ColorPicker label="Background color" bind:value={$backgroundColor} />
  <ColorPicker label="Font color" bind:value={$fontColor} />
  <FontSelector label="Font family" />
  <NumericInput
    label="Font size"
    max={defaults.fontSize.max}
    bind:value={$fontSize} />
  <NumericInput
    label="Max digits"
    max={defaults.maxLength.max}
    bind:value={$maxLength} />
  <NumericInput label="Width" max={defaults.width.max} bind:value={$width} />
  <NumericInput label="Height" max={defaults.height.max} bind:value={$height} />

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
        class:is-static={!$isAllowedToCreateNew || !numbersValid}
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
