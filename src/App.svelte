<script>
  import Footer from './components/Footer.svelte';
  import Homepage from './components/HomePage.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import Resume from './components/Resume.svelte';
  import ContactMe from './components/ContactMe.svelte';
  import { scrollIntoView } from './lib/JumpToSection.js';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Skeleton, ImagePlaceholder, TextPlaceholder } from 'flowbite-svelte';
  let currentPage = 'home'; 
  let pages = {
    home: '#section-1',
    resume: '#section-2',
    portfolio: '#section-3',
    contact: '#section-4'
  }
  $: activeUrl=pages[currentPage]
</script>
<div class="relative px-8">
  <Navbar let:hidden let:toggle class="">
    <NavBrand href="/">
      <!-- <img src="/src/assets/svelte.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center whitespace-nowrap text-xl text-black font-semibold dark:text-white">Yeonhoon Jang</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {activeUrl} {hidden}>
      <NavLi href="#section-1" on:click={ scrollIntoView }>Home</NavLi>
      <NavLi href="#section-2" on:click={ scrollIntoView }>Resumé</NavLi>
      <NavLi href="#section-3" on:click={ scrollIntoView }>Portfolio</NavLi>
      <NavLi href="#section-4" on:click={ scrollIntoView }>Contact</NavLi>
    </NavUl>
  </Navbar>
  <div class="overflow-scroll pb-16 mt-48 max-w-2xl">
    <Homepage/>
    <Resume />
    <PortfolioPage />
    <ContactMe />
  </div>
  <Footer />
</div>
  <!-- <Router {pages} /> -->
<!-- <main>
  {#if currentPage === 'home'}
  {:else if currentPage === 'portfolio'}
  {:else if currentPage === 'resume'}
  {:else if currentPage === 'contact'}
  {/if}
</main> -->
