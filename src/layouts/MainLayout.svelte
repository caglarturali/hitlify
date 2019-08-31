<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>

</style>

<Header />
<div class="container">
  <slot />
</div>
<Footer />
