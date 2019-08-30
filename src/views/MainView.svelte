<script>
  import MainLayout from "../layouts/MainLayout.svelte";

  import OptionsPanel from "../containers/OptionsPanel.svelte";
  import SvgPreview from "../containers/SvgPreview.svelte";
  import Testimonials from "../containers/Testimonials.svelte";
  import Notification from "../components/Notification.svelte";
</script>

<style>

</style>

<MainLayout>
  <div class="section">
    <Notification>
      Hit counters are
      <strong>back</strong>
      ! Create yours now for free.
    </Notification>

    <div class="tile is-ancestor">
      <div class="tile is-7 is-parent">
        <OptionsPanel />
      </div>
      <div class="tile is-5 is-parent">
        <SvgPreview />
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-12 is-parent">
        <Testimonials />
      </div>
    </div>
  </div>
</MainLayout>
