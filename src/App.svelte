<script>
  import { onMount, tick, beforeUpdate, afterUpdate } from 'svelte';
  import Footer from './components/Footer.svelte';
  import Intro from './components/Intro.svelte';
  import About from './components/About.svelte';
  import Resume from './components/Resume.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import ContactMe from './components/ContactMe.svelte';
  import { scrollIntoView } from './lib/JumpToSection.js';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Skeleton, ImagePlaceholder, TextPlaceholder } from 'flowbite-svelte';
  import '../app.css';
  // import { divs } from './main.js'
  let currentPage = 'home'; 
  let pages = {
    home: '#section-1',
    about: '#section-2',
    portfolio: '#section-3',
    contact: '#section-4'
  }
  let pages_arr = [
    {name:'home',href:'#section-1', text: 'Home'},
    {name:'about',href:'#section-2', text: 'About'},
    {name:'portfolio',href:'#section-3', text: 'Portfolio'},
    {name:'contact',href:'#section-4', text: 'Contact'},
  ]
  $:activeUrl=pages[currentPage]
  let activeClass = 'text-primary-500 hover:text-primary-500 md:hover-text-primary-500';
  let nonActiveClass = 'hover:text-primary-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  
  onMount(()=>{
    async function check(){
      await tick();
      // const sections = document.querySelectorAll('section[id]')
    }
    check()
  })
  let showResume = false;
  function openResume(event){
    showResume = true;
  }
  function closeResume(event){
    showResume = false;
  }

</script>
<div class="max-w-4xl">
  <Navbar let:hidden let:toggle navClass="sticky top-0 navigation">
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl text-black font-semibold dark:text-white tracking-tight">Yeonhoon's Resumé</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {activeUrl} {hidden} {activeClass} {nonActiveClass}>
      {#each pages_arr as page}
        <NavLi navClass="" href={page.href} on:click={()=>currentPage=page.name}>{page.text}</NavLi>
      {/each}
    </NavUl>
  </Navbar>
  <div class="pb-16 mt-48 px-8">
      {#if showResume === true}
        <Resume on:backToPage={closeResume}/>
      {:else}
        <Intro />
        <About on:resumetest={openResume}/>
        <PortfolioPage />
        <ContactMe />
      {/if}
  </div>
  <Footer />
</div>
