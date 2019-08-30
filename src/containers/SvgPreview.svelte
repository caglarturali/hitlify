<script>
  import TileBox from "../components/TileBox.svelte";
  import Svg from "../components/Svg.svelte";
</script>

<style>
  .svg-preview {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<TileBox title="Preview">
  <figure class="image svg-preview">
    <Svg />
  </figure>
</TileBox>
