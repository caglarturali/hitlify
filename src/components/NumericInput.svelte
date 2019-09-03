<script>
  import { isLoading, isAllowedToCreateNew } from '../stores.js';
  import { randomNumber } from '../lib/utils.js';

  export let label;
  export let min = 1;
  export let max;
  export let value;
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
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="range"
          bind:value
          required
          {value}
          {min}
          {max}
          disabled={!$isAllowedToCreateNew || $isLoading} />
      </div>
    </div>
    <div class="field has-addons">
      <div class="control">
        <input
          class="input"
          type="number"
          bind:value
          required
          {value}
          {min}
          {max}
          disabled={!$isAllowedToCreateNew || $isLoading} />
      </div>
      <p class="control">
        <button
          class="button"
          on:click={() => (value = randomNumber(max))}
          class:is-static={!$isAllowedToCreateNew || $isLoading}>
          <span class="icon">
            <i class="fas fa-random" />
          </span>
        </button>
      </p>
    </div>
  </div>
</div>
