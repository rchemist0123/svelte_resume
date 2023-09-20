<script>
    let pages_arr = [
    {name:'home',href:'#section-1', text: 'Home'},
    {name:'about',href:'#section-2', text: 'About'},
    {name:'portfolio',href:'#section-3', text: 'Portfolio'},
    {name:'contact',href:'#section-4', text: 'Contact'},
  ]

  function toggleDark(){
    const body = document.querySelector('body')
    body.classList.toggle('dark')
  }
  let currentPage = 'home'; 
</script>
<nav class="w-full fixed top-0 bg-white z-10 dark:bg-slate-900">
    <div class="container mx-auto py-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img class="w-8" src="/src/assets/favicon.png" alt="" />
        <span class="text-3xl font-caveat font-extrabold italic text-primary-500 dark:text-white">Yeonhoon's Resumé</span>
      </div>
      <ul class="hidden md:flex space-x-10 text-gray-600 dark:text-white font-bold text-sm uppercase">
        {#each pages_arr as page}
          <li class="group hover:text-primary-500 active:text-primary-500">
            <a class="group-hover:text-primary-500 group-active:text-primary-500" href={page.href} id={page.name} on:click={()=>{currentPage=page.name}}>{page.text}</a>
          </li>
        {/each}
      </ul>
      <button on:click={toggleDark}>
          <img class="hidden md:block w-5 cursor-pointer border-none active:outline-none focus:outline-none" src="/src/assets/moon.png" alt="" />
      </button>
      <!-- Hamberger -->
      <div id="hamburger" class="space-y-1 md:hidden cursor-pointer z-20">
        <div class="w-6 h-1 bg-black"></div>
        <div class="w-6 h-1 bg-black"></div>
        <div class="w-6 h-1 bg-black"></div>
      </div>
      <ul
        id="menu"
        class="hidden bg-white absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-black text-center
        dark:bg-slate-500 dark:text-white"
      >
        {#each pages_arr as page}
          <li class="group hover:text-primary-500 active:text-primary-500">
            <a class="group-hover:text-primary-500 group-active:text-primary-500" href={page.href} on:click={()=>{currentPage=page.name}}>{page.text}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>