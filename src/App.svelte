<script>
  import { onMount, tick, beforeUpdate, afterUpdate } from 'svelte';
  import NavPage from './components/NavPage.svelte';
  import Intro from './components/Intro.svelte';
  import About from './components/About.svelte';
  import Resume from './components/Resume.svelte';
  import PortfolioPage from "./components/PortfolioPage.svelte";
  import Presentation from './components/Presentation.svelte';
  import ContactMe from './components/ContactMe.svelte';
  import Footer from './components/Footer.svelte';
  import ScrollTopBtn from './components/ScrollTopBtn.svelte';
  // import { scrollIntoView } from './lib/JumpToSection.js';
  // import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, DarkMode, Button } from 'flowbite-svelte';
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
    let scroller = document.getElementById("scroller");
  })
  
  let showResume = false;
  function openResume(){
    showResume = true;
    window.scrollTo({top:0, behavior: 'auto'})
  }
  async function closeResume(){
    showResume = false;
    await tick();
    const sec2loc = document.querySelector("#section-2");
    sec2loc.scrollIntoView({behavior: "smooth", block: "start"});
  }
</script>
<!-- <div class="relative"> -->
  <!-- </div> -->
  {#if showResume === true}
    <Resume on:backToPage={closeResume}/>
  {:else}
    <NavPage />
    <ScrollTopBtn />
    <div class="sticky right-0 bg-gray-200 rounded-full w-2.5 dark:bg-gray-700" >
      <div class="bg-blue-600 h-full w-2.5 rounded-full" id="scroller"></div>
    </div>
    <Intro />
    <About on:resumetest={openResume}/>
    <PortfolioPage />
    <Presentation />
    <ContactMe />
  {/if}
<Footer />

