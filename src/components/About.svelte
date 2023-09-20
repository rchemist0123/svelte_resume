<script>
  import {createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function test(){
    dispatch('resumetest',{text:'test'})
  }

</script>
<section class="px-16 dark:bg-slate-800" id="section-2">
  <div class="container mx-auto py-40 flex flex-col-reverse md:flex-row items-center gap-20">
    <!-- left -->
    <div class="relative md:w-2/3 ">
      <div class="h-full rounded-3xl">
        <img src="/src/assets/laptop.jpg" alt="" />
      </div>
    </div>
    <!-- right -->
    <div class="my-auto flex flex-col gap-2 text-left">
      <p class="font-extrabold text-sm text-primary-600">ABOUT ME</p>
      <p class="font-semibold text-sm dark:text-white">A passionate data analyst based in Seongnam, South Korea📍</p>
      <p class="text-slate-400 text-xs">Mainly use R as a data scientist. Eager to work effectively. Like to develop Web pages, which is one of my favorite hobbies.</p>
      <div class="">
        <button class="group px-3 py-1 rounded-xl border-primary-400 bg-white 
          hover:outline-none hover:border-primary-400
          focus:ring-primary-500 focus:outline-none active:scale-95
          active:ring-1 active:ring-primary-700
          dark:bg-primary-500
          w-fit
          "
          on:click={test}
        >
          <svg class="inline-block w-4 h-4 text-gray-800 group-hover:text-primary-600 group-focus:text-primary-600 dark:text-black dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
          </svg>
        <span class="text-xs font-bold text-black group-hover:text-primary-600 group-focus:text-primary-600 dark:group-hover:text-white">Resumé</span>
        </button>
      </div>
    </div>

  </div>
</section>