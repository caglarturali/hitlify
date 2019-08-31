<script>
  import GitHubButton from "../../components/GitHubButton.svelte";

  let tweetUrl =
    "https://twitter.com/intent/tweet?text=Hitlify: Create custom hit counters with ease!;hashtags=hitlify,javascript,svelte,nodejs,codinggarden&amp;url=https://hitlify.now.sh/&amp;via=coding_garden";
</script>

<style>
  .bd-tw-button {
    background-color: #55acee;
    color: #fff;
    border-color: transparent !important;
  }
  .bd-tw-button:hover {
    background-color: #00aae8;
    color: #fff;
  }
</style>

<nav
  class="navbar has-shadow is-spaced"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="images/logo-type.png" height="32" alt="App logo" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          <span class="icon has-text-primary">
            <i class="fas fa-home" />
          </span>
          <span>Home</span>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            <span class="icon has-text-success">
              <i class="fab fa-pagelines" />
            </span>
            <span>Coding Garden</span>
          </span>

          <div class="navbar-dropdown">
            <a
              class="navbar-item"
              href="https://coding.garden/"
              target="_blank">
              <span class="icon has-text-primary">
                <i class="fas fa-bookmark" />
              </span>
              <span>Website</span>
            </a>
            <a
              class="navbar-item"
              href="https://www.youtube.com/c/CodingGardenWithCJ"
              target="_blank">
              <span class="icon has-text-danger">
                <i class="fab fa-youtube" />
              </span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">

            <GitHubButton
              user="caglarturali"
              repo="hitlify"
              title="Front-End Repo" />

            <GitHubButton
              user="CodingGarden"
              repo="hit-counter"
              title="Back-End Repo" />

            <p class="control">
              <a
                class="button bd-tw-button"
                data-social-network="Twitter"
                data-social-action="tweet"
                data-social-target="https://hitlify.now.sh/"
                target="_blank"
                href={tweetUrl}
                title="Spread the word..">
                <span class="icon">
                  <i class="fab fa-twitter" />
                </span>
                <span>Tweet</span>
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
