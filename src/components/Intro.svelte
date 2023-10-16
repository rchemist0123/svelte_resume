<script>
  import { typewriter } from "../lib/Typewriter";
  import { Heading, P, FooterIcon, Tooltip} from 'flowbite-svelte'
  import { GithubSolid, LinkedinSolid, BookSolid } from 'flowbite-svelte-icons'
  let sources = [
    {dir: "images/R.svg", alt: "R"},
    {dir: "images/python.svg", alt: "Python"},
    {dir: "images/postgresql.svg", alt: "PostgreSQL"},
    {dir: "images/html5.svg", alt: "HTML5"},
    {dir: "images/css3.svg", alt: "CSS3"},
    {dir: "images/js.svg", alt: "JavaScript"},
    {dir: "images/svelte.svg", alt: "Svelte"},
    {dir: "images/tailwindcss.svg", alt: "TailwindCSS"},
  ]
</script>

<div id="section-1" class="px-5 md:px-20 pt-36 dark:bg-slate-800">
  <section class="container mx-auto flex flex-col justify-center md:flex-row items-center gap-4" >
    <!-- left -->
    <div class="my-auto flex flex-col gap-5 text-center md:w-2/5 md:text-left">
      <h1 class="text-5xl font-bold after:content-['👋🏻'] after:-skew-y-3 dark:text-white md:text-left ">헬스케어<br>데이터분석가</h1>
      <p class="text-gray-400">
        안녕하세요! 데이터를 다루고, 분석하고, 시각화하는 것을 좋아합니다. 개발은 취미입니다 🤣
      </p>
      <div class="flex mt-4 space-x-6 justify-center md:justify-start md:mt-0">
        <FooterIcon href="https://github.com/rchemist0123" target="_blank">
          <GithubSolid class="w-4 h-4 text-black dark:text-white hover:text-primary-600" />
        </FooterIcon>
        <FooterIcon href="https://www.linkedin.com/in/danjang0123/" target="_blank">
          <LinkedinSolid class="w-4 h-4 text-black dark:text-white hover:text-primary-600" />
        </FooterIcon>    
        <FooterIcon href="https://rchemistblog.com/" target="_blank">
          <BookSolid class="w-4 h-4 text-black dark:text-white hover:text-primary-600" />
        </FooterIcon>    
      </div>
    </div>
    <!-- right -->
    <div class="">
      <div class="max-w-xs rounded-full">
        <img src="images/meme.png" alt="" >
      </div>
    </div>
  </section>
  <div class="mx-auto py-10 flex flex-col flex-wrap md:flex-row gap-5 justify-center">
    <p class="font-semibold text-black text-xl dark:text-white">Skills</p>
    <div class="grid grid-cols-4 justify-items-center gap-y-4 md:flex md:flex-row md:gap-20 md:justify-center">
      {#each sources as source}
        <img src={source.dir} alt={source.alt} class="h-6 w-6 my-1 hover:scale-125 transition duration-200"/>
        <Tooltip>{source.alt}</Tooltip>
      {/each}
    </div>
  </div>
</div>




