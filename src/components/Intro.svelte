<script>
  import { typewriter } from "../lib/Typewriter";
  import { Heading, P, FooterIcon} from 'flowbite-svelte'
  import { GithubSolid, LinkedinSolid, BookSolid } from 'flowbite-svelte-icons'
  let sources = [
    {dir: "/src/assets/R.svg", alt: "R"},
    {dir: "/src/assets/python.svg", alt: "Python"},
    {dir: "/src/assets/postgresql.svg", alt: "PostgreSQL"},
    {dir: "/src/assets/html5.svg", alt: "HTML5"},
    {dir: "/src/assets/css3.svg", alt: "CSS3"},
    {dir: "/src/assets/js.svg", alt: "JavaScript"},
    {dir: "/src/assets/svelte.svg", alt: "Svelte"},
    {dir: "/src/assets/tailwindcss.svg", alt: "TailwindCSS"},
  ]
</script>

<div class="flex flex-col sm:flex-row justify-between" id="section-1">
  <div class="flex-col justify-between max-w-lg mx-auto">
    <Heading tag="h1" class="after:content-['👋🏻'] after:-skew-y-3 text-left">Healthcare Data Scientist </Heading>
    <p class="mt-3 text-left px-0 py-2 text-slate-400 text-md max-w-sm" in:typewriter>
      Hi, I like to handle, analyze and visualize healthcare data. South Korea📍
    </p>
    <div class="my-5 sm:flex sm:items-center sm:justify-left">
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <FooterIcon href="https://github.com/rchemist0123">
          <GithubSolid class="w-4 h-4 text-black dark:text-white hover:text-gray-900" />
        </FooterIcon>
        <FooterIcon href="https://www.linkedin.com/in/danjang0123/">
          <LinkedinSolid class="w-4 h-4 text-black dark:text-white hover:text-gray-900" />
        </FooterIcon>    
        <FooterIcon href="https://rchemistblog.com/">
          <BookSolid class="w-4 h-4 text-black dark:text-white hover:text-gray-900" />
        </FooterIcon>    
      </div>
    </div>
  </div>
  <img class="w-60 h-60 mx-auto rounded-full border border-black" src="/src/assets/meme.png" alt="" >
</div>


<div class="my-10 flex justify-between">
  <p class="font-semibold text-black text-xl">Tech Stack</p>
  <p> | </p>
  {#each sources as source}
  <img src={source.dir} alt={source.alt} class="h-6 w-6 my-1 hover:scale-125 transition duration-200"/>
  {/each}
</div>

