<script>
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
    <div class="field">
      <p class="control">
        <input class="input" type="color" bind:value {value} />
      </p>
    </div>
    <div class="field" />
  </div>
</div>
