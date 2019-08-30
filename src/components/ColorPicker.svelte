<script>
  import { randomColor } from "../lib/utils.js";
  export let label, value;
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
    <div class="field has-addons">
      <p class="control is-expanded">
        <input class="input" type="color" bind:value {value} />
      </p>
      <p class="control">
        <button class="button" on:click={() => (value = randomColor())}>
          <span class="icon">
            <i class="fas fa-random" />
          </span>
        </button>

      </p>
    </div>

    <div class="field" />
  </div>
</div>
