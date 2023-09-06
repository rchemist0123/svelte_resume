<script>
  import * as resume from '../lib/ResumeData.js';
  import { Img, Heading, Hr, P } from 'flowbite-svelte';
</script>

<div class="outer">
  <div class="sec-resume intro">
    <Img src="/src/assets/svelte.svg" alt="sample 1" size="max-w-xl" imgClass="h-30" alignment="mx-auto"/>
    <p>안녕하세요! 헬스케어 데이터 분석을 좋아하는 장연훈입니다.</p>
    <p>헬스케어 데이터로 건강 문제를 해결하는 것에 관심이 많습니다.</p>
    <ul>
      <li>✉️ Email:  <a href="mailto:danjang0123@gmail.com">danjang0123@gmail.com</a></li>
      <li>🖇️ SNS: <a href="https://www.linkedin.com/in/danjang0123/">Linkedin</a></li>
    </ul>
  </div>
  <div class="sec-resume profile">
    <Heading tag="h1">Profile</Heading>
    <Hr />
    <div class='sec-resume-sub'>
      <Heading tag="h5">경력</Heading>
      <ul>
        {#each resume.careers as career}
          <li>{career.title} | {career.period}
            <span>{career.description}</span>
          </li>
        {/each}
      </ul>
    </div>
    <div class='sec-resume-sub'>
      <Heading tag="h5">학력</Heading>
      <ul>
        {#each resume.educations as edu}
          <li>{edu.title} | {edu.period}</li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="sec-resume skills">
    <Heading tag="h1" class="bottom-line">⚒️ 보유스킬</Heading>
    <Hr />
    <ul>
      {#each resume.skills as skill}
        <li>
          <p>{skill.title}: {skill.description}</p>
        </li>
      {/each}
    </ul>
  </div>
  <div class="sec-resume howiwork">
    <Heading tag="h1" class="bottom-line">💼 일하는 방식</Heading>
    <Hr />
    <ul>
      {#each resume.howIWork as work}
        <li>{work}</li>
      {/each}
    </ul>
  </div>
</div>
<style>
  .outer {
    display: flex;
    align-items: center; /* 수직 정렬 */
    flex-direction: column; /* default: row */
    justify-content: center;
  }
  .sec-resume {
    margin-bottom: 2rem;
    width: 650px;
    text-align: left;
  }
  .sec-resume.intro {
    text-align: center;
    margin-top: 100px;
  }
  .sec-resume-sub {
    margin-bottom: 1rem;
  }

</style>
