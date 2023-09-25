<script>
  import { afterUpdate } from 'svelte';
  afterUpdate(()=>{
    let toTopBtn = document.getElementById("toTopBtn");
    window.addEventListener("scroll",()=>{
      const currentY = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const percent = (currentY / height) * 100
      percent >= 10 ? toTopBtn.classList.remove('hidden') : toTopBtn.classList.add('hidden');
        // scroller.style.width = percent + '%';
    })
  })
</script>
<div class="fixed right-10 bottom-10 z-10">
  <button id="toTopBtn" class="flex justify-center items-center animate-bounce bg-white dark:bg-slate-800 w-10 h-10 hidden rounded-full border-2 shadow-md hover:border-none hover:outline-none focus:outline-none active:outline-none" on:click={()=>document.documentElement.scrollTo(0,0)}>
    <svg class="w-3 h-3 md:w-6 md:h-6 text-gray-800 rounded-full  dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
    </svg>
  </button>
</div>
