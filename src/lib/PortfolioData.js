export let projects = [
  {
    type: 'paper',
    title: "KSA Sepsis associated AKI 예측",
    summary: "KSA 레지스트리 데이터를 활용한 Sepsis-associated AKI 연구",
    description: ["ICU에 입원한 패혈증 환자들의 급성신장애(Acute kidney disease, AKI) 에 영향을 미치는 요인 파악" ,
                  "AKI stage에 따른 병원 내 사망 (in-hospital mortality) 영향 요인 예측",
                  "Korean sepsis alliance (KSA) registry 데이터 활용",
                  "Logistic regression, Subgroup analysis 진행"],
    role: '데이터 분석, 데이터 시각화',
    link: '',
    period: '2022.10 - 2023.12'
  },
  {
    type: 'project',
    title: "HRA 대시보드 웹 어플리케이션",
    summary: "국민건강보험공단(NHIS) 데이터를 활용한 주요 질환 및 사망 예측모델 개발 및 대시보드 시각화",
    situation:"",
    description: ""
  },
  {
    type: 'paper',
    title: "Association of Dexmedetomidine With New-Onset Atrial Fibrillation in Patients With Critical Illness",
    summary: "MIMIC-IV를 활용한 New-Onset Afib 연구",
    journal: "JAMA network open",
    description: ["ICU 입실 환자의 New-onset atrial fibrillation (NOAF) 에 영향을 미치는 요인 확인" ,
                  "BMI의 변화 여부에 따른 4개의 그룹 간 T2DM 발생 위험 비교",
                  "*Medical Information Mart for Intensive Care (MIMIC) IV*",
                  "External validation with SNUBH EHR data",
                  "Propensity score Matching, Cox regression, Subgroup analysis 진행"],

    role: '데이터 분석, 데이터 시각화',
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2804042',
    period: '2021.10 - 2023.04'
  },
  {
    type: 'paper',
    title: "The Risk of Type 2 Diabetes Mellitus according to Changes in Obesity Status in Late Middle-Aged Adults: A Nationwide Cohort Study of Korea",
    journal: "Diabetes & Metabolism Journal",
    summary: "NHIS 데이터를 활용한 52세 전후 BMI 변화가 당뇨 발생에 미치는 영향 연구",
    description: ["52세 이전의 BMI가 그 이후의 제2형당뇨(T2DM) 발생에 미치는 위험요인 확인" ,
                  "BMI의 변화 여부에 따른 4개의 그룹 간 T2DM 발생 위험 비교",
                  "국민건강보험공단(NHIS) 표본형 DB (100만 코호트) 활용",
                  "Propensity score Matching, Cox regression, Subgroup analysis 진행"],
    role: '데이터 분석, 데이터 시각화',
    link: 'https://www.e-dmj.org/journal/view.php?number=2744',
    period: '2021.10 - 2023.04'
  },
  {
    type: 'paper',
    title: "Changes of Body Mass Index and the Incidence of Hypertension in Late Middle Age: A Nationwide Cohort Study in South Korea",
    journal: "Korean Journal of Health Promotion",
    summary: "NHIS 데이터를 활용한 52세 전후 BMI 변화가 고혈압 발생에 미치는 영향 연구",
    description: ["52세 이전의 BMI가 그 이후의 고혈압 발생에 미치는 위험요인 확인" ,
                  "국민건강보험공단(NHIS) 표본형 DB (100만 코호트) 활용",
                  "Propensity score Matching, Cox regression, Subgroup analysis 진행"],
    role: '데이터 분석, 데이터 시각화',
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2804042',
    period: '2021.10 - 2022.11'
  },
];