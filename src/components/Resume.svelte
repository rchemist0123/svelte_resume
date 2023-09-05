<script>
  let skills = [
    {title:"R", description: "데이터 핸들링, 데이터 전처리, 데이터 시각화, 통계분석, 머신 러닝, 대시보드 제작(Shiny) 가능"},
    {title:"Python", description: "데이터 핸들링, 데이터 전처리, 데이터 시각화, 머신 러닝, FastAPI"},
    {title:"SQL, PostgreSQL", description: "중첩 서브쿼리 등을 활용해 데이터 분석에 필요한 데이터 추출 가능"},
    {title:"Selenium", description: "셀레니움과 BeautifulSoup 패키지를 활용해 웹 크롤러 제작 가능"},
    {title:"Git", description: "협업을 위한 브랜치, 머지, 롤백 후 머지 등 가능"},
  ]

  let educations = [
    {title: '서울대학교 보건대학원', period: '2019.03-2021.02'},
    {title: '건국대학교 중어중문학과', period: '2013.03-2019.02'},
  ]

  let careers = [
    {title: '분당서울대학교병원 디지털헬스케어연구사업부',
    period:'2021.06-2023.12',
    description: '국민건강보험공단(NHIS), MIMIC-IV 데이터 분석, Korean Sepsis Alliance (KSA)'}
  ]
</script>

<div class="intro">
  <p>안녕하세요! 헬스케어 데이터 분석을 좋아하는 장연훈입니다.</p>
  <p>헬스케어 데이터로 건강 문제를 해결하는 것에 관심이 많습니다.</p>
  <ul>
    <li>✉️ Email:  [danjang0123@gmail.com](mailto:marketing@wantedlab.com)</li>
    <li>🖇️ SNS: https://www.linkedin.com/in/danjang0123/</li>
  </ul>
</div>
<div class="profile">
  <h1 class="bottom-line">Profile</h1>
  <div>
    <h2>경력</h2>
    <ul>
      {#each careers as career}
        <li>{career.title} | {career.period} | {career.description} </li>
      {/each}
    </ul>
  </div>
  <div>
    <h2>학력</h2>
    <ul>
      {#each educations as edu}
        <li>{edu.title} | {edu.period}  </li>
      {/each}
    </ul>
  </div>
</div>
<div class="skills">
  <h1 class="bottom-line">⚒️ 보유스킬</h1>
  <ul>
    {#each skills as skill}
      <li>
        <p>{skill.title}:{skill.description}</p>
      </li>
    {/each}
  </ul>
</div>
<style>
  .bottom-line {
    border-bottom: 1px solid black;
  }
</style>
