<script>
  import { projects } from '../lib/PortfolioData.js';
  import { Card, Heading, Hr, Modal, Button } from 'flowbite-svelte';
  import PortfolioModal from './PortfolioModal.svelte';
  let clickOutsideModal = false;
  let selectedItem = null;
  const openModal = (item) => {
    clickOutsideModal = true
    selectedItem = item
  }

  const closeModel = () => {
    clickOutsideModal = false
  }
</script>

<section class="mt-60 max-w-xl mx-auto" id="section-3">
  <div class="">
    <p class="font-bold text-left text-md text-primary-600">PORTFOLIO</p>
    <p class="font-extrabold text-left text-md text-black my-3">Each project is a unique piece of anlaysis & development 🧩</p>
  </div>
  <div class="mx-auto">
    <div class="grid md:grid-cols-2">
      <div class="p-6">
        <img class="w-64 h-48 mx-auto rounded-xl " src="/src/assets/JAMA_network_thumbnail.png" alt="mimic4_NOAF" />
      </div>
      <div class="p-6">
        <p class="font-extrabold pb-3 after:content-['🏥']">ICU NOAF (MIMIC-IV)</p>
        <p class="text-xs w-40 mx-auto text-slate-400">With MIMIC-IV data, new-onset atrial fibrillation, Cox regression, Subgroup analysis</p>
        <div class="mx-auto my-5 font-bold grid grid-cols-5 gap-3">
          <p class="text-xs col-start-2 col-end-3">R</p>
          <p class="text-xs col-start-3 col-end-4">PostgreSQL</p>
        </div>
        <div class="mx-auto">
          <a href="https://github.com/rchemist0123/MIMIC_IV_NOAF.git" target="_blank" class="group text-slate-700 hover:text-primary-500 dark:text-white text-xs font-semibold mx-2 active:text-primary-600">
            Code
            <svg class="inline-block w-5 h-5 text-black group-hover:text-primary-500 group-active:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2804042" target="_blank" class="group text-slate-700 hover:text-primary-600 dark:text-white text-xs font-semibold mx-2">
            Link
            <svg class="inline-block w-4 h-4 text-gray-800 group-hover:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto my-32">
    <div class="grid md:grid-cols-2">
      <div class="p-6">
        <p class="font-extrabold pb-3 after:content-['📊']">KHC HRA dashboard</p>
        <p class="text-xs w-40 mx-auto text-slate-400">Check your biological age & health scores by health examination. Survey and Dashboard are included.</p>
        <div class="mx-auto my-5 font-bold space-x-2">
          <p class="inline-block text-xs col-start-1 col-end-2">Shiny</p>
          <p class="inline-block text-xs col-start-2 col-end-3">CSS</p>
          <p class="inline-block text-xs col-start-3 col-end-4">Javascript</p>
        </div>
        <div class="mx-auto">
          <a href="https://github.com/rchemist0123/KHC_dashboard" target="_blank" class="group text-slate-700 hover:text-primary-500 dark:text-white text-xs font-semibold mx-2 active:text-primary-600">
            Code
            <svg class="inline-block w-5 h-5 text-black group-hover:text-primary-500 group-active:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://yeonhoon.shinyapps.io/KHC_HRA2/" target="_blank" class="group text-slate-700 hover:text-primary-600 dark:text-white text-xs font-semibold mx-2">
            Live Demo
            <svg class="inline-block w-4 h-4 text-gray-800 group-hover:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-6">
        <img class="w-64 h-48 mx-auto rounded-xl " src="/src/assets/khc.gif" alt="mimic4_NOAF" />
      </div>
    </div>
  </div>
  <div class="mx-auto my-32">
    <div class="grid md:grid-cols-2">
      <div class="p-6">
        <img class="w-64 h-48 mx-auto rounded-xl object-cover" src="/src/assets/dmj.png" alt="mimic4_NOAF" />
      </div>
      <div class="p-6">
        <p class="font-extrabold pb-3 after:content-['📝']">T2DM risk & BMI (NHIS)</p>
        <p class="text-xs w-40 mx-auto text-slate-400">The association between BMI change in middle age and T2DM incidence. Risk factors of T2DM.</p>
        <div class="mx-auto my-5 font-bold space-x-10">
          <p class="inline-block text-xs">R</p>
          <p class="inline-block text-xs">SAS</p>
        </div>
        <div class="mx-auto">
          <a href="https://github.com/rchemist0123/NHIS_T2DM_HTN_ASCVD.git" target="_blank" class="group text-slate-700 hover:text-primary-500 dark:text-white text-xs font-semibold mx-2 active:text-primary-600">
            Code
            <svg class="inline-block w-5 h-5 text-black group-hover:text-primary-500 group-active:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.e-dmj.org/journal/view.php?number=2744" target="_blank" class="group text-slate-700 hover:text-primary-600 dark:text-white text-xs font-semibold mx-2">
            Link
            <svg class="inline-block w-4 h-4 text-gray-800 group-hover:text-primary-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>

    <!-- {#each projects as project} -->
        <!-- <Card class="my-5"> 
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {project.summary}
          </p>
          <br>
          <Button
            on:click={()=> openModal(project)}
            class="inline-flex items-center hover:underline"
          >
            자세히
          </Button>
        </Card> -->
    <!-- {/each} -->
    <!-- {#if clickOutsideModal && selectedItem}
      <PortfolioModal 
        on:openDetail = {closeModel}
        item={selectedItem} open={clickOutsideModal} />
    {/if} -->
  </section>