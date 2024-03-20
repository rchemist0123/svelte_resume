import { TicketOutline } from "flowbite-svelte-icons"

const skills = [
  {title:"R", description: "데이터 핸들링, 데이터 전처리, 데이터 시각화, 통계분석, 머신 러닝, 대시보드 제작(Shiny) 가능"},
  {title:"Python", description: "데이터 핸들링, 데이터 전처리, 데이터 시각화, 머신 러닝, FastAPI"},
  {title:"SQL, PostgreSQL", description: "중첩 서브쿼리 등을 활용해 데이터 분석에 필요한 데이터 추출 가능"},
  {title:"Selenium", description: "셀레니움과 BeautifulSoup 패키지를 활용해 웹 크롤러 제작 가능"},
  {title:"Git", description: "협업을 위한 브랜치, 머지, 롤백 후 머지 등 가능"},
]

const educations = [
  {title: '서울대학교 보건대학원', period: '2019.03-2021.02'},
  {title: '건국대학교 중어중문학과', period: '2013.03-2019.02'},
]

const certificates = [
  {title: '빅데이터분석기사', date:'2021.07'},
  {title: 'SQLD', date:'2021.06'},
  {title: 'ADsP', date: '2021.06'}
]
const careers = [
  {title: '분당서울대학교병원 디지털헬스케어연구사업부',
  period:'2021.06 ~ ',
  description: ['국민건강보험공단(NHIS)','MIMIC-IV', 'Korean Sepsis Alliance (KSA)']}
]

const papers = [
  // AMA style
  {ref:'Park H, Jung SY, Han MK, Jang Y, Moon YR, Kim T, Shin S-Y, Hwang H. Lowering Barriers to Health Risk Assessments in Promoting Personalized Health Management. Journal of Personalized Medicine. 2024; 14(3):316.', doi: 'https://doi.org/10.3390/jpm14030316'},
  {ref:'Song MJ, Jang Y, Lee JH, et al. Association of Dexmedetomidine With New-Onset Atrial Fibrillation in Patients With Critical Illness. JAMA Netw Open. 2023;6(4):e239955.', doi:'https://doi.org/10.1001/jamanetworkopen.2023.9955'},
  {ref:'Moon JH, Jang Y, Oh TJ, Jung SY. The Risk of Type 2 Diabetes Mellitus according to Changes in Obesity Status in Late Middle-Aged Adults: A Nationwide Cohort Study of Korea. Diabetes Metab J. 2023;47(4):514-522.', doi:'https://doi.org/10.4093/dmj.2022.0159'},
  {ref:'Jang Y, You M, Park G, et al. Analysis of Communication Content on Bedside Rounds in a Hospital - Implications for Patient Centered Communication Qual Improv Health Care. 2023;29(1):43-57.', doi:'https://doi.org/10.14371/QIH.2023.29.1.43'},
  {ref:'Jung SY, Jang Y, Bae WK, Han JS. Changes of Body Mass Index and the Incidence of Hypertension in Late Middle Age: A Nationwide Cohort Study in South Korea. Korean J Health Promot 2022;22(4):175-182.', doi:'https://doi.org/10.15384/kjhp.2022.22.4.175'},
  {ref:'Jang Y, You M, Lee H, et al. Burnout and peritraumatic distress of healthcare workers in the COVID-19 pandemic. BMC Public Health 2021;21, 2075', doi:'https://doi.org/10.1186/s12889-021-11978-0'},
  {ref:'Jang Y, You M, Lee S, Lee W. Factors Associated With the Work Intention of Hospital Workers’ in South Korea During the Early Stages of the COVID-19 Outbreak. Disaster Medicine and Public Health Preparedness, 2021;15(3), E23-E30.', doi:'https://doi.org/10.1017/dmp.2020.221'},
]

const howIWork = [
  "목표 달성을 통해 느끼는 성취감을 좋아합니다.",
  "계획적으로 업무를 준비하고 수행합니다.",
  "어떤 일이든 나를 성장시키기 위한 기회라고 생각하고 적극적으로 일합니다.",
  "문제가 생겨도 그 상황 안에서 일을 진행할 수 있는 방향을 찾습니다.",
  "업무 기한을 반드시 지킵니다.",
]

export { skills, educations, certificates, papers, careers, howIWork }