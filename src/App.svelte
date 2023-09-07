<script>
  // import svelteLogo from './assets/svelte.svg'
  // import viteLogo from '/vite.svg'

  import { onMount } from 'svelte';
  import Homepage from './components/HomePage.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import Resume from './components/Resume.svelte';
  import Footer from './components/Footer.svelte';
  import ContactMe from './components/ContactMe.svelte';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  let currentPage = 'home'; 
  let pages = {
    home: '#',
    resume: '##',
    portfolio: '###',
    contact: '####'
  }
  $: activeUrl=pages[currentPage]
</script>
<header>
  <!-- <Router {pages} /> -->
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/src/assets/svelte.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Logo</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {activeUrl} {hidden}>
      <NavLi href="#" on:click={()=>currentPage = 'home'}>Home</NavLi>
      <NavLi href="##" on:click={()=>currentPage = 'resume'}>Resumé</NavLi>
      <NavLi href="###" on:click={()=>currentPage = 'portfolio'}>Portfolio</NavLi>
      <NavLi href="####" on:click={()=>currentPage = 'contact'}>Contact</NavLi>
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
</style>
