<script>
  import Svg from "../components/Svg.svelte";
</script>

<style>
  .svg-preview {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="tile is-child box">
  <p class="subtitle">Preview</p>
  <hr />

  <figure class="image svg-preview">
    <Svg />
  </figure>
</div>
