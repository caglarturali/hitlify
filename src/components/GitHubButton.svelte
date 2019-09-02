<script>
  import { onMount } from "svelte";

  export let user, repo, title;
  let repoUrl = `https://github.com/${user}/${repo}`;
  let reposApiBase = "https://api.github.com/repos";

  let stars = 0;
  let storageKey = `${user}-${repo}-json`;

  onMount(async () => {
    if (!fetchLocalStorage()) {
      await fetchApi();
    }
  });

  const fetchLocalStorage = () => {
    if (window.localStorage && localStorage.getItem(storageKey)) {
      const jsonRecord = JSON.parse(localStorage.getItem(storageKey));
      stars = jsonRecord.stargazers_count;
      return true;
    }
    return false;
  };

  const fetchApi = async () => {
    const res = await fetch(`${reposApiBase}/${user}/${repo}`);
    const json = await res.json();

    if (res.ok) {
      stars = json.stargazers_count;
      if (window.localStorage) {
        localStorage.setItem(storageKey, JSON.stringify(json));
      }
    }
  };
</script>

<style>
  .badge {
    background-color: #555;
    border-radius: 2px;
    color: white;
    font-size: 0.8rem;
    padding: 0 0;
    margin-left: 0.5em;
  }
</style>

<p class="control">
  <a class="button" href={repoUrl} target="_blank" {title}>
    <span class="icon">
      <i class="fab fa-github-alt" />
    </span>
    <span>{repo}</span>
    <span class="badge">
      {stars}
      <i class="fas fa-star" />
    </span>
  </a>
</p>
