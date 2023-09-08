<script>
  import { Footer, FooterCopyright, FooterIcon, Hr } from 'flowbite-svelte' 
  import { GithubSolid, LinkedinSolid, BookSolid } from 'flowbite-svelte-icons'
</script>

<Footer footerType="socialmedia">
  <div class="sm:flex sm:items-center sm:justify-center">
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon href="https://github.com/rchemist0123">
        <GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900" />
      </FooterIcon>
      <FooterIcon href="https://www.linkedin.com/in/danjang0123/">
        <LinkedinSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900" />
      </FooterIcon>    
      <FooterIcon href="https://rchemistblog.com/">
        <BookSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900" />
      </FooterIcon>    
    </div>
  </div>
  <Hr />
  <FooterCopyright href="/" by="Rchemist" />
</Footer>