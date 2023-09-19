<script>
  import {createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function test(){
    dispatch('resumetest',{text:'test'})
  }

</script>
<section class="grid gap-4 sm:grid-cols-2 mt-60" id="section-2">
  <div class="p-8">
    <img class="rounded-lg w-64 mx-auto max-w-xs" src="/src/assets/laptop.jpg" alt="" />
  </div>
  <div class="p-8 mx-auto align-middle">
    <p class="font-extrabold text-left text-sm text-primary-600">ABOUT ME</p>
    <p class="font-semibold text-left text-sm my-3">A passionate data analyst based in Seongnam, South Korea📍</p>
    <p class="text-slate-400 text-left text-xs my-3">Mainly use R as a data scientist. Eager to work effectively. Like to develop Web pages, which is one of my favorite hobbies.</p>
    <div class="text-left">
      <button class="group px-3 py-2 space-x-1 rounded-xl border-primary-400 bg-white 
        hover:scale-105 hover:outline-none hover:border-primary-400
        focus:ring-primary-500 focus:outline-none active:scale-95
        active:ring-2 active:ring-primary-700"
        on:click={test}
      >
        <svg class="inline-block w-4 h-4 text-gray-800 group-hover:text-primary-600 group-focus:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      <span class="text-xs font-bold text-black group-hover:text-primary-600 group-focus:text-primary-600">Resumé</span>
      </button>
    </div>
  </div>
</section>