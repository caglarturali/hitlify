<script>
  import { onMount } from "svelte";

  export let user, repo, title;
  let repoUrl = `https://github.com/${user}/${repo}`;
  let reposApiBase = "https://api.github.com/repos";

  let stars = 0;
  let storageKey = `${user}-${repo}-json`;
  let lastCheckKey = "last_check";
  let expireIn = 5 * 60 * 1000;

  onMount(async () => {
    if (!fetchLocalStorage()) {
      await fetchApi();
    }
  });

  const fetchLocalStorage = () => {
    if (window.localStorage && localStorage.getItem(storageKey)) {
      const json = JSON.parse(localStorage.getItem(storageKey));

      const lastCheck = json[lastCheckKey];
      if (Math.floor(Date.now() - lastCheck) >= expireIn) {
        return false;
      }

      stars = json.stargazers_count;
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
        json[lastCheckKey] = Date.now();
        localStorage.setItem(storageKey, JSON.stringify(json));
      }
    }
  };
</script>

<style>
  .stargazers,
  .stargazers .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875em;
  }
  .stargazers .icon {
    font-size: 0.75em;
  }

  .field.has-addons {
    margin-right: 10px;
  }
</style>

<div class="field has-addons" {title}>
  <p class="control">
    <a class="button" href={repoUrl} target="_blank">
      <span class="icon">
        <i class="fab fa-github-alt" />
      </span>
      <span>{repo}</span>
    </a>
  </p>
  <p class="control">
    <a class="button" href={repoUrl} target="_blank">
      <div class="stargazers">
        <span class="icon">
          <i class="fas fa-star" />
        </span>
        <span>{stars}</span>
      </div>
    </a>
  </p>
</div>
