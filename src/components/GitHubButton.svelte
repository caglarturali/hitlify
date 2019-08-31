<script>
  import { onMount } from "svelte";

  export let user, repo, title;
  let repoUrl = `https://github.com/${user}/${repo}`;
  let reposApiBase = "https://api.github.com/repos";

  let stars = 0;

  onMount(async () => {
    const res = await fetch(`${reposApiBase}/${user}/${repo}`);
    const json = await res.json();

    if (res.ok && json.stargazers_count) {
      stars = json.stargazers_count;
    }
  });
</script>

<style>
  .badge {
    background-color: #555;
    border-radius: 2px;
    color: white;
    font-size: 0.8rem;
    padding: 0 5px;
    margin-left: 0.5em;
  }
</style>

<p class="control">
  <a class="button" href={repoUrl} target="_blank" {title}>
    <span class="icon">
      <i class="fab fa-github-alt" />
    </span>
    <span>{repo}</span>
    <span class="badge">{stars}</span>
  </a>
</p>
