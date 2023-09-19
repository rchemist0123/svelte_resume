<script>
  import * as resume from '../lib/ResumeData.js';
  import { Img, Heading, List, Li } from 'flowbite-svelte';

  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher()

  function backToPortfolio() {
    dispatch('backToPage')
  }

</script>

<section>
  <div class="text-center mt-2">
    <Img src="/src/assets/meme.png" alt="My profile" class="rounded-full w-48 h-48 border-4 border-primary-500" alignment="mx-auto"/>
    <br />
    <p>안녕하세요! 헬스케어 데이터분석 연구원 장연훈입니다.</p>
    <p><span class="underline decoration-wavy decoration-primary-500">데이터 분석,웹개발</span> 등 코딩하는 것을 좋아합니다.</p>
    <p>헬스케어 데이터로 건강 문제를 해결하는 것에 관심이 많습니다.</p>
    <ul class="my-2">
      <li class="before:content-['✉️']"> Email:  <a href="mailto:danjang0123@gmail.com">danjang0123@gmail.com</a></li>
      <li>🖇️ SNS: <a href="https://www.linkedin.com/in/danjang0123/">Linkedin</a></li>
    </ul>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1">Profile</Heading>
    <hr class="mt-2 mb-5"/>
    <div>
      <Heading tag="h5">경력</Heading>
      <ul>
        {#each resume.careers as career}
          <li>
            {career.title} | {career.period}
            <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
              {career.description}
            </List>
          </li>
        {/each}
      </ul>
    </div>
    <div class='mt-5'>
      <Heading tag="h5">학력</Heading>
      <List tag="ul" class="space-y-0.5 dark:text-gray-4 00">
        {#each resume.educations as edu}
          <Li>{edu.title} | {edu.period}</Li>
        {/each}
      </List>
    </div>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1" class="bottom-line">⚒️ 보유스킬</Heading>
    <hr class="mt-2 mb-5"/>
    <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
      {#each resume.skills as skill}
        <Li>
          {skill.title}: {skill.description}
        </Li>
      {/each}
    </List>
  </div>
  <div class="text-left my-20">
    <Heading tag="h1" class="bottom-line">💼 일하는 방식</Heading>
    <hr class="mt-2 mb-5"/>
    <List tag="ul" class="space-y-0.5 text-gray-500 dark:text-gray-400">
      {#each resume.howIWork as work}
        <Li>{work}</Li>
      {/each}
    </List>
  </div>
  <div>
    <button class="px-4 py-1 text-lg rounded-lg border-primary-500 text-primary-500 font-bold
      hover:border-primary-800 hover:outline-none
      focus:outline-none focus:border-primary-500 
      active:ring-2 active:ring-primary-700 active:scale-95"
      on:click={backToPortfolio}>
      돌아가기
    </button>
  </div>
</section>

