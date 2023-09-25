<script>
  import { onMount, tick, beforeUpdate, afterUpdate } from 'svelte';
  import NavPage from './components/NavPage.svelte';
  import Intro from './components/Intro.svelte';
  import About from './components/About.svelte';
  import Resume from './components/Resume.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import ContactMe from './components/ContactMe.svelte';
  import Footer from './components/Footer.svelte';
  import { scrollIntoView } from './lib/JumpToSection.js';
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, Button } from 'flowbite-svelte';
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
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu")
    hamburger.addEventListener("click",()=>{
      menu.classList.toggle("hidden")
      hamburger.classList.toggle('bg-white')
    })
    
    const hrefs = document.querySelectorAll("li > a")
    hrefs.forEach(href => {
      href.addEventListener('click', (e) => {
        hrefs.forEach((el)=> el.classList.remove("text-primary-500"));
        href.classList.add("text-primary-500");
      })
    });

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
  function toggleDark(){
    const body = document.querySelector('body')
    body.classList.toggle('dark')
  }
  
  $:checkHref = () => {

  }
</script>

<!-- <Navbar let:hidden let:toggle navClass="sticky top-0 navigation dark:bg-slate-900">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl text-black font-semibold dark:text-white tracking-tight">Yeonhoon's Resumé</span>
  </NavBrand>
  <div class="flex md:order-2">
    <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
      <DarkMode />
    </Button>
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3">
        <DarkMode />
      </div>
    </div>
    <NavHamburger on:click={toggle} />
  </div>
  <NavUl {activeUrl} {hidden} {activeClass} {nonActiveClass}>
    {#each pages_arr as page}
    <NavLi navClass="" href={page.href} on:click={()=>currentPage=page.name}>{page.text}</NavLi>
    {/each}
  </NavUl>
</Navbar> -->
{#if showResume === true}
  <Resume on:backToPage={closeResume}/>
{:else}
  <NavPage />
  <Intro />
  <About on:resumetest={openResume}/>
  <PortfolioPage />
  <ContactMe />
{/if}
<Footer />

