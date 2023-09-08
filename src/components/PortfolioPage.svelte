<script>
  import { projects } from '../lib/PortfolioData.js';
  import { Card, Heading, Hr, Modal, Button } from 'flowbite-svelte';
  import PortfolioModal from './PortfolioModal.svelte';
  let clickOutsideModal = false;
  let selectedItem = null;
  const openModal = (item) => {
    clickOutsideModal = true
    selectedItem = item
  }
  const closeModel = () => {
    clickOutsideModal = false
  }
</script>

<Heading tag="h1">Projects & Papers</Heading >
<Hr/>

<div class="outer">
  {#each projects as project}
    <div class="inner">
      <Card>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          {project.summary}
        </p>
        <br>
        <Button
          on:click={()=> openModal(project)}
          class="inline-flex items-center hover:underline"
        >
          자세히
        </Button>
      </Card>
    </div>
  {/each}
  {#if clickOutsideModal && selectedItem}
    <PortfolioModal 
      on:openDetail = {closeModel}
      item={selectedItem} open={clickOutsideModal} />
  {/if}
</div>

<style>
  .outer {
    display: inline-grid;
  }
 .inner {
    margin-bottom: 30px;
  }
</style>
