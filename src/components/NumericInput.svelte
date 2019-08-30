<script>
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
        <input class="input" type="range" bind:value {value} {min} {max} />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" type="number" bind:value {value} {min} {max} />
      </div>
    </div>
  </div>
</div>
