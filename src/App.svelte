<script>
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'
  import Counter from './components/Counter.svelte'
  import { onMount } from 'svelte';
  import Homepage from './components/HomePage.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import Resume from './components/Resume.svelte';
  import Footer from './components/Footer.svelte';
  import ContactMe from './components/ContactMe.svelte';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  let currentPage = 'home';  
  onMount(() => {

  })
</script>
<header>
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/src/assets/svelte.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi on:click={()=>currentPage = 'home'}>Home</NavLi>
      <NavLi on:click={()=>currentPage = 'resume'}>Resumé</NavLi>
      <NavLi on:click={()=>currentPage = 'portfolio'}>Portfolio</NavLi>
      <NavLi on:click={()=>currentPage = 'contact'}>Contact</NavLi>
    </NavUl>
  </Navbar>
</header>
<main>
  
  {#if currentPage === 'home'}
    <Homepage />
  {:else if currentPage === 'portfolio'}
    <PortfolioPage />
  {:else if currentPage === 'resume'}
    <Resume />
  {:else if currentPage === 'contact'}
    <ContactMe />
  {/if}

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
