<script>
  export let type = 'info';
  let showNotification = true;
</script>

<style>

</style>

{#if showNotification}
  <div class={`notification is-${type}`}>
    <button class="delete" on:click={() => (showNotification = false)} />
    <slot />
  </div>
{/if}
