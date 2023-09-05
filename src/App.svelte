<script>
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  import Counter from './components/Counter.svelte'
  import { onMount } from 'svelte';
  import Homepage from './components/HomePage.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import Resume from './components/Resume.svelte';
  let currentPage = 'home';

  onMount(() => {

  })
</script>

<main>
  
  <nav>
    <button on:click={() => currentPage = 'home'}>Home</button>
    <button on:click={() => currentPage = 'resume'}>Resumé</button>
    <button on:click={() => currentPage = 'portfolio'}>Portfolio</button>
    <button on:click={() => currentPage = 'contact'}>Contact</button>
  </nav>
  {#if currentPage === 'home'}
    <Homepage />
  {:else if currentPage === 'portfolio'}
    <PortfolioPage />
  {:else if currentPage === 'resume'}
    <Resume />
  {/if}
  
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1> -->



</main>

<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
