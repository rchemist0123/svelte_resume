<script>
  import { projects } from '../lib/PortfolioData.js';
  import { Card, Heading, Hr } from 'flowbite-svelte';
  
</script>

<Heading tag="h1">Projects & Papers</Heading >
<Hr/>

<div class="outer">
  {#each projects as project}
    <div class="inner">
      <Card>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{project.summary}</p>
        <a href="/" class="inline-flex items-center text-primary-600 hover:underline">
          자세히
        </a>
      </Card>

    </div>
  {/each}
</div>

<style>
  .outer {
    display: inline-grid;
  }
 .inner {
    margin-bottom: 30px;
  }
</style>
