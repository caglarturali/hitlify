<script>
  import { fade, slide } from "svelte/transition";
  import FileSaver from "file-saver";

  import {
    isAllowedToCreateNew,
    showResultsPanel,
    response
  } from "../stores.js";
  import { API_BASE } from "../shared.js";

  $: embedUrl = `${API_BASE}/counters/${$response.guid}`;
  $: imgText = `<img src="${embedUrl}"/>`;
  $: uniqueEmbedUrl = `${embedUrl}?unique=true`;
  $: uniqueImgText = `<img src="${uniqueEmbedUrl}"/>`;

  let showEmbed = true;
  $: responseString = JSON.stringify($response, null, 2);

  const downloadJSON = () => {
    var blob = new Blob([responseString], {
      type: "application/json;charset=utf-8"
    });
    FileSaver.saveAs(blob, "response.json");
  };

  const createNew = () => {
    isAllowedToCreateNew.set(true);
    showResultsPanel.set(false);
    response.set({});
  };

  const handleCreateNew = () => {
    const isOk = confirm("Are you sure?");
    if (isOk) {
      createNew();
    }
  };

  const closePanel = () => {
    createNew();
    showResultsPanel.set(false);
  };
</script>

<style>
  .box {
    padding: 0;
  }
  .code-view {
    background: #fff;
    color: #4a4a4a;
    font-family: monospace;
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
  }
  pre,
  .code-view {
    border-radius: 4px;
  }
</style>

{#if $showResultsPanel}
  <div class="tile is-ancestor">
    <div class="tile is-12 is-parent">
      <div class="tile is-child box">

        <div class="notification">
          <button class="delete" on:click={() => closePanel()} />
          <div class="tabs is-centered">
            <ul>
              <li class:is-active={showEmbed}>
                <a on:click={() => (showEmbed = true)}>
                  <span class="icon is-small">
                    <i class="fas fa-code" />
                  </span>
                  <span>Embed</span>
                </a>
              </li>
              <li class:is-active={!showEmbed}>
                <a on:click={() => (showEmbed = false)}>
                  <span class="icon is-small">
                    <i class="fas fa-file-code" />
                  </span>
                  <span>Response</span>
                </a>
              </li>
              <li>
                <a on:click={() => handleCreateNew()}>
                  <span class="icon is-small">
                    <i class="fas fa-plus" />
                  </span>
                  <span>Create New</span>
                </a>
              </li>

            </ul>
          </div>

          {#if showEmbed}
            <div class="code-view" in:fade out:slide={{ duration: 500 }}>
              <p>
                // Place this snippet into your page for
                <em>total</em>
                visitor count.
              </p>
              <p>{imgText}</p>
              <br />
              <p>
                // Use the following for
                <em>unique</em>
                visitor counter.
              </p>
              <p>{uniqueImgText}</p>
            </div>
          {:else}
            <div in:fade out:slide={{ duration: 500 }}>
              <pre>{responseString}</pre>

              <br />
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <button
                    class="button is-primary has-icons has-icons-left"
                    on:click={() => downloadJSON()}>
                    <span class="icon">
                      <i class="fas fa-download" />
                    </span>
                    <p>Download JSON</p>
                  </button>
                </p>
              </div>
            </div>
          {/if}

        </div>

      </div>
    </div>
  </div>
{/if}
