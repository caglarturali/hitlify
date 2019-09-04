<script>
  export let type = 'primary';
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
