<script>
  import MainLayout from "../layouts/MainLayout.svelte";
  import OptionsPanel from "../components/OptionsPanel.svelte";
  import Svg from "../components/Svg.svelte";
</script>

<style>

</style>

<MainLayout>
  <div class="section">
    <div class="tile is-ancestor">
      <div class="tile is-7 is-parent">
        <OptionsPanel />
      </div>
      <div class="tile is-5 is-parent">
        <Svg />
      </div>
    </div>
  </div>
</MainLayout>
