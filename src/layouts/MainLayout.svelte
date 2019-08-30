<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>
  .main-content {
    min-height: 85vh;
  }
</style>

<Header />
<div class="container main-content">
  <slot />
</div>
<Footer />
