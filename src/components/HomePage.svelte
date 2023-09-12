<script>
  import { typewriter } from "../lib/Typewriter";
  import { Heading, P, FooterIcon} from 'flowbite-svelte'
  import { GithubSolid, LinkedinSolid, BookSolid } from 'flowbite-svelte-icons'

</script>

<div class="flex">
  <div id="section-1" class="flex-col justify-between">
    <Heading tag="h1" class="after:content-['✋'] after:-skew-y-3 text-left">Healthcare Data Scientist </Heading>
    <p 
      in:typewriter
      class="mt-5 text-left">
      Hi! I like to handle, analyze and visualize healthcare data. South Korea📍
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
  <img src="/src/assets/meme.png" alt="" class="w-60 h-60 rounded-full border border-black">
</div>


<div class="my-10 flex justify-between">
  <p class="font-semibold text-black text-xl">Tech Stack</p>
  <p> | </p>
  <img src="/src/assets/R.svg" class="h-6 w-6" alt="R">
  <img src="/src/assets/python.svg" class="h-6 w-6" alt="python">
  <img src="/src/assets/postgresql.svg" class="h-6 w-6" alt="postgresql">
  <img src="/src/assets/html5.svg" class="h-6 w-6" alt="hmlt5">
  <img src="/src/assets/css3.svg" class="h-6 w-6" alt="css3">
  <img src="/src/assets/js.svg" class="h-6 w-6" alt="javascript">
  <img src="/src/assets/svelte.svg" class="h-6 w-6" alt="svelte">
  <img src="/src/assets/tailwindcss.svg" class="h-6 w-6" alt="tailwind css">
</div>

