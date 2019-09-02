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

  import {
    randomNumber,
    randomColor,
    humanVerification
  } from "../lib/utils.js";
  import { API_BASE } from "../shared.js";

  const handleRandomizeAllClick = () => {
    width.set(randomNumber(400, 96));
    height.set(randomNumber($width / 2, 24));
    const fontMax =
      $height < defaults.fontSize.max ? $height : defaults.fontSize.max;
    fontSize.set(randomNumber(fontMax, 16));
    maxLength.set(randomNumber(10, 3));
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
    initiateProcess();
  };

  let processInitiated = false;
  let verify = {
    question: "",
    answer: 0,
    userInput: null
  };
  const initiateProcess = () => {
    const { question, answer } = humanVerification();
    verify.question = question;
    verify.answer = answer;
    processInitiated = true;
  };

  const clearProcess = () => {
    verify = {
      question: "",
      answer: 0,
      userInput: null
    };
    processInitiated = false;
  };

  const continueProcess = async () => {
    if (verify.answer === verify.userInput) {
      clearProcess();
      await makeRequest();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    continueProcess();
  };

  const makeRequest = async () => {
    isLoading.set(true);

    try {
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

        // Scroll to bottom
        window.scrollTo({
          behavior: "smooth",
          top: document.body.scrollHeight,
          left: 0
        });
      }
    } catch (error) {
      console.log(error);
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

    {#if !processInitiated}
      <p class="control">
        <button
          class="button is-light has-icons has-icons-left"
          class:is-static={!$isAllowedToCreateNew || $isLoading}
          on:click={() => handleRandomizeAllClick()}>
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
          <span class="icon">
            <i class="fas fa-rocket" />
          </span>
          <p>Generate Counter</p>
        </button>
      </p>
    {:else}
      <form on:submit={handleOnSubmit}>
        <div class="field has-addons">
          <p class="control">
            <span class="button is-static">{verify.question} =</span>
          </p>
          <div class="control">
            <input
              class="input"
              type="text"
              on:input={e => {
                const input = e.target.value;
                verify.userInput = input ? Number(input) : null;
              }}
              placeholder="?" />
          </div>
          <p class="control">
            <button
              class="button is-primary has-icons has-icons-left"
              class:is-static={!(verify.userInput >= 0 && verify.userInput === verify.answer)}
              on:click={() => continueProcess()}>
              <span class="icon">
                <i class="fas fa-rocket" />
              </span>
              <p>GO!</p>
            </button>
          </p>
          <p class="control">
            <button
              class="button is-danger has-icons has-icons-left"
              on:click={() => clearProcess()}>
              <span class="icon">
                <i class="fas fa-times" />
              </span>
            </button>
          </p>
        </div>
      </form>
    {/if}

  </div>
</TileBox>
