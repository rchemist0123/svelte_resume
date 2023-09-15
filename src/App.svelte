<script>
  import Footer from './components/Footer.svelte';
  import Intro from './components/Intro.svelte';
  import About from './components/About.svelte';
  import Resume from './components/Resume.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import ContactMe from './components/ContactMe.svelte';
  import { scrollIntoView } from './lib/JumpToSection.js';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Skeleton, ImagePlaceholder, TextPlaceholder } from 'flowbite-svelte';
  import '../app.css';
  let currentPage = 'home'; 
  let pages = {
    home: '#section-1',
    about: '#section-2',
    portfolio: '#section-3',
    contact: '#section-4'
  }
  $:activeUrl=pages[currentPage]
  let activeClass = 'text-primary-500 hover:text-primary-500 md:hover-text-primary-500';
  let nonActiveClass = 'hover:text-primary-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>
<div class="max-w-4xl">
  <Navbar let:hidden let:toggle navClass="sticky top-0">
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl text-black font-semibold dark:text-white tracking-tight">Yeonhoon's Resumé</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {activeUrl} {hidden} {activeClass} {nonActiveClass}>
      <NavLi href="#section-1" on:click={()=>currentPage = 'home'}>Home</NavLi>
      <NavLi href="#section-2" on:click={()=>currentPage = 'about'}>About</NavLi>
      <NavLi href="#section-3" on:click={()=>currentPage = 'portfolio'}>Portfolio</NavLi>
      <NavLi href="#section-4" on:click={()=>currentPage = 'contact'}>Contact</NavLi>
    </NavUl>
  </Navbar>
  <div class="pb-16 mt-48 px-8">
    <Intro />
    <About />
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

