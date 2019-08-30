<script>
  import MainLayout from "../layouts/MainLayout.svelte";

  import OptionsPanel from "../containers/OptionsPanel.svelte";
  import SvgPreview from "../containers/SvgPreview.svelte";
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
        <SvgPreview />
      </div>
    </div>
  </div>
</MainLayout>
