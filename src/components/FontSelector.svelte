<script>
  import {
    fontFamily,
    fonts,
    isLoading,
    isAllowedToCreateNew,
  } from '../stores.js';

  export let label;

  let newFont;
  const addNewFontToList = () => {
    if (!newFont || newFont == '') return;
    fonts.update(f => [...f, newFont]);
    fontFamily.set(newFont);
    newFont = '';
  };

  const selectRandomFont = () => {
    const randomFontIndex = Math.floor(Math.random() * $fonts.length);
    fontFamily.set($fonts[randomFontIndex]);
  };
</script>

<style>
  .field-label {
    flex-grow: 2;
  }
</style>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">{label}</label>
  </div>
  <div class="field-body">
    <div class="field has-addons ">

      <p class="control">
        <span class="select is-fullwidth">
          <select
            bind:value={$fontFamily}
            disabled={!$isAllowedToCreateNew || $isLoading}>
            {#each $fonts as font}
              <option value={font}>{font}</option>
            {/each}
          </select>
        </span>
      </p>
      <p class="control">
        <button
          class="button"
          on:click={() => selectRandomFont()}
          class:is-static={!$isAllowedToCreateNew || $isLoading}>
          <span class="icon">
            <i class="fas fa-random" />
          </span>
        </button>
      </p>

    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label" />
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control is-expanded">
          <input
            class="input"
            type="text"
            bind:value={newFont}
            placeholder="Add new font to the list"
            disabled={!$isAllowedToCreateNew || $isLoading} />
        </p>
        <p class="control">
          <button
            class="button"
            on:click={() => addNewFontToList()}
            class:is-static={!$isAllowedToCreateNew || $isLoading}>
            <i class="fas fa-plus" />
          </button>
        </p>
      </div>
      <p class="help">
        Make sure the new font is available on the page where the counter will
        be placed
      </p>
    </div>
  </div>
</div>
