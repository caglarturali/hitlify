<script>
  import { onMount } from 'svelte';

  const totalCountUrl =
    'https://ht-ct.now.sh/counters/4d169295-4c2c-4197-a1b3-a2904d0c1c75';
  const uniqueCountUrl = `${totalCountUrl}?unique=true`;

  const currentBgColor = '#fafafa';
  const newBgColor = '#00000000';

  const counterSVGs = {
    total: '',
    unique: '',
  };

  onMount(async () => {
    counterSVGs.total = await fetchSvg(totalCountUrl);
    counterSVGs.unique = await fetchSvg(uniqueCountUrl);
  });

  const fetchSvg = async url => {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
    let text = await res.text();
    return text.replace(currentBgColor, newBgColor);
  };
</script>

<style>
  .footer {
    padding: 2rem;
  }
  .svelte {
    display: flex;
    justify-content: center;
    width: 128px;
    height: 40px;
  }
  .svelte img {
    width: 90px;
    height: auto;
    padding-bottom: 6px;
  }
</style>

<footer class="footer">
  <nav class="level is-mobile">
    <div class="level-item has-text-centered" />
    <div class="level-item has-text-centered is-narrow">
      <div>
        <p class="heading">Total</p>
        <span alt="Total visitor count">
          {@html counterSVGs.total}
        </span>
      </div>
    </div>
    <div class="level-item has-text-centered is-narrow">
      <div>
        <p class="heading">Built With</p>
        <a href="https://svelte.dev/" target="_blank">
          <div class="svelte">
            <img src="images/svelte-logotype.svg" alt="Svelte" />
          </div>
        </a>
      </div>
    </div>
    <div class="level-item has-text-centered is-narrow">
      <div>
        <p class="heading">Unique</p>
        <span alt="Unique visitor count">
          {@html counterSVGs.unique}
        </span>
      </div>
    </div>
    <div class="level-item has-text-centered" />
  </nav>
</footer>
