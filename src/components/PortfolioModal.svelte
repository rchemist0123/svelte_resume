<script>
  import { createEventDispatcher } from 'svelte';
  import { Modal,Button, Heading, Hr} from 'flowbite-svelte';
  // import { CheckCircleSolid } from 'flowbite-svelte-icons';
  export let item;
  export let open = false;
  const dispatch = createEventDispatcher();

  const closeModal = () => dispatch('openDetail')
</script>

<Modal title={item.title} bind:open={open} on:close={closeModal} outsideclose>
  <div>
    <!-- <CheckCircleSolid class='w5 h5' /> -->
    <Heading tag="h4">Summary</Heading>
    <p>{item.summary}</p>
  </div>
  <div>
    <Heading tag="h4">Description</Heading>
    <p>{item.description}</p>
  </div>
  <div>
    <Heading tag="h4">Role</Heading>
    <p>{item.role}</p>
  </div>
  <div>
    <Heading tag="h4">Period</Heading>
    <p>{item.period}</p>
  </div>
  <div>
    <Heading tag="h4">Link</Heading>
    <p><a href={item.link}>Link</a></p>
  </div>
  <svelte:fragment slot="footer">
      <Button on:click={closeModal}>Close</Button>
  </svelte:fragment>
</Modal>

<style>
   div {
    text-align: left;
  }
</style>