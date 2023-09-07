<script>
  import { projects } from '../lib/PortfolioData.js';
  import { createEventDispatcher } from 'svelte';
  import { Modal,Button } from 'flowbite-svelte';
  export let item;
  export let open = false;
  const dispatch = createEventDispatcher();

  const closeModal = () => dispatch('openDetail')
</script>

<Modal title={item.title} bind:open={open} on:close={closeModal} outsideclose>
  <p>{item.summary}</p>
  <p>{item.description}</p>
  <p>역할: {item.role}</p>
  <p>기간: {item.period}</p>
  <p>링크: <a href={item.link}>Link</a></p>
  <svelte:fragment slot="footer">
      <Button on:click={closeModal}>Close</Button>
  </svelte:fragment>
</Modal>
