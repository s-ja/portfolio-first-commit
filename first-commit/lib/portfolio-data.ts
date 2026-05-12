export const contact = {
  email: "ansj8777@gmail.com",
  github: "https://github.com/s-ja",
  resume: "/안승지_이력서_First Commit.pdf",
};

export const highlights = [
  {
    title: "프론트엔드 사용성을 고려한 데이터 UI 구조화",
    summary:
      "다량의 테이블, 승인 상태, 권한 정보를 사용자 판단 순서에 맞게 분리·재배치",
    points: ["목록과 상세 정보의 노출 우선순위 분리", "운영자 의사결정 흐름 기준의 화면 단위 구성", "상태 전환과 예외 케이스의 UI 명확화"],
  },
  {
    title: "제약 기반 기술 선택 및 연동 구조 구성",
    summary:
      "호스팅, API 명세, 일정 제약을 기준으로 실행 가능한 프론트엔드·API 연결 구조 설계",
    points: ["정적 호스팅과 서버리스 함수 조합", "외부 API 생명주기 검증", "클라이언트 키 노출 방지 구조"],
  },
  {
    title: "협업 가능한 개발 환경 구축",
    summary:
      "팀 단위 개발에서 코드 기준, 배포 흐름, 문서화 체계를 먼저 정리하는 작업 방식",
    points: ["PR·이슈 기반 협업 흐름", "GitHub Actions 배포 자동화", "README·Wiki 중심 의사결정 기록"],
  },
];

export const techGroups = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue3", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "styled-components"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java", "Spring Boot", "MySQL", "MyBatis"],
  },
  {
    category: "Libraries",
    items: ["AG-Grid", "Bootstrap", "Axios", "TanStack Query", "React Hook Form"],
  },
  {
    category: "Tools / Deploy",
    items: ["Git", "SVN", "GitHub Actions", "Vercel", "Netlify", "Prettier", "Husky"],
  },
  {
    category: "Design",
    items: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  type: "실무" | "개인" | "팀";
  techStack: string[];
  summary: string;
  coreProblem: string;
  keywords: string[];
  links: {
    github?: string;
    demo?: string;
  };
  detail: {
    context: string;
    constraints: string[];
    decisions: string[];
    process: string[];
    troubleshooting: string[];
    result: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "mpnite-admin",
    title: "MPNITE Admin",
    subtitle: "3D 프린팅 제조 플랫폼 관리자 시스템",
    period: "2025.08 ~ 2025.09",
    team: "3인",
    role: "프론트엔드 중심 개발",
    type: "실무",
    techStack: ["Vue3", "Java Spring Boot", "MySQL", "MyBatis", "AG-Grid", "Bootstrap"],
    summary: "운영자가 사용자·신청·장비 데이터를 빠르게 판단할 수 있도록 관리자 화면의 정보 구조와 상태 흐름 재배치",
    coreProblem: "핵심 정보의 그리드 집중으로 인한 승인, 권한, 상세 확인 흐름의 판단 비용 증가",
    keywords: ["Admin UX", "데이터 그리드", "승인 흐름", "권한 관리"],
    links: {},
    detail: {
      context: "제조 플랫폼 운영 업무의 반복 흐름: 목록 확인, 상태 판단, 승인·반려, 상세 정보 검토. 단순 CRUD보다 운영자 판단 순서에 맞는 정보 배치가 핵심 과제",
      constraints: [
        "기존 서비스 계층과 맞물린 프론트엔드 구조",
        "제한된 일정 내 핵심 비즈니스 페이지 우선 개발 필요",
        "다량 데이터의 표 기반 처리와 사용성 저하 위험 동시 존재",
      ],
      decisions: [
        "목록 즉시 판단 정보와 상세 확인 정보 분리",
        "승인·반려 단계와 예외 케이스가 드러나는 화면 단위 구성",
        "권한 데이터의 중복·삭제 위험 축소를 위한 관리 단위와 예외 상황 분리",
      ],
      process: [
        "사용자 관리, 신청 승인, 장비·소재 관련 화면 우선 구현",
        "AG-Grid 기반 다중 선택, 일괄 처리, 입력 검증 흐름 보강",
        "목록·팝업·탭 구조를 통한 정보 접근 단계화",
      ],
      troubleshooting: [
        "공유 서비스 계층 내 관리자 전용 동작 필요 지점 식별 및 분기 기준 정리",
        "일괄 처리 선택 상태와 검증 결과 불일치 가능성 제거",
      ],
      result: [
        "목록 선판단, 상세 후확인의 운영 흐름 확립",
        "짧은 기간 내 서비스 운영 핵심 관리자 기능 우선 구현",
      ],
    },
  },
  {
    slug: "urbas-site",
    title: "URBAS Site",
    subtitle: "기업 소개 사이트 및 서버리스 회원·문의 시스템",
    period: "2025.08 ~ 2025.09",
    team: "2인",
    role: "프론트엔드 중심 풀스택 개발",
    type: "실무",
    techStack: ["Vue3", "Vite", "TypeScript", "Netlify Functions", "MySQL", "Sass"],
    summary: "기존 호스팅 조건과 요구 기능을 검토해 정적 사이트와 서버리스 API를 결합한 구조로 전환",
    coreProblem: "회사 소개 사이트에 회원·문의 기능이 추가되었으나 기존 호스팅 환경은 API 운영과 배포 확장성에 제약 존재",
    keywords: ["Serverless", "REST API", "인증 흐름", "문의 시스템"],
    links: {},
    detail: {
      context: "단순 소개 페이지에서 회원 유형별 문의, 비회원 문의, 관리자 답변 상태 관리가 필요한 구조로 요구사항 확장",
      constraints: [
        "기존 호스팅 환경의 동적 API 운영 한계",
        "별도 백엔드 서버 구성 없이 필요한 API만 안정적으로 제공해야 하는 일정 조건",
        "회원·비회원 문의 흐름 공존으로 인한 인증 상태별 UI 분기 필요",
      ],
      decisions: [
        "정적 호스팅과 서버리스 함수 조합으로 기능 요구 충족",
        "문의 작성·조회·상태 관리를 REST API 단위로 분리",
        "로그인 과정 이후 작성 화면 복귀 동선 설계",
      ],
      process: [
        "Netlify Functions 기반 API 작성, MySQL 연결, 환경 변수 분리",
        "회원 유형, 이메일 중복 확인, 문의 등록·조회, 관리자 답변 상태 흐름 구현",
        "전화번호 포맷팅, 로그인 후 복귀, 인증 상태 기반 UI 전환 적용",
      ],
      troubleshooting: [
        "호스팅 환경 제약 확인 후 서버리스 전환안 제시",
        "페이지 이동 중 문의 작성 흐름 단절 문제를 라우팅과 UI 상태 기준으로 정리",
      ],
      result: [
        "정적 사이트의 배포 단순성과 API 기반 기능 확장 동시 확보",
        "프론트엔드 화면과 서버리스 API 연결 구조 검증",
      ],
    },
  },
  {
    slug: "travelbook",
    title: "TravelBook",
    subtitle: "여행 포토북 주문 웹 서비스",
    period: "2026.04",
    team: "1인",
    role: "기획 / 개발",
    type: "개인",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Sweetbook API"],
    summary: "짧은 기간 내 외부 Book Print API의 주문 생명주기 검증에 집중한 웹 서비스 초안 구현",
    coreProblem: "공식 문서만으로 확정하기 어려운 요청·응답 구조와 제한된 개발 기간의 동시 존재",
    keywords: ["외부 API 검증", "Next.js API Routes", "키 보호", "범위 고정"],
    links: {
      github: "https://github.com/s-ja/sweetbook-travel",
      demo: "https://sweetbook-travel.vercel.app/",
    },
    detail: {
      context: "여행 사진을 포토북 주문으로 연결하는 서비스를 1주일 안에 기획·구현해야 하는 조건. 전체 커머스 기능보다 주문 API 생명주기 검증이 우선 과제",
      constraints: [
        "개발 기간 1주일",
        "API Key 클라이언트 노출 방지 필요",
        "문서에 없는 요청·응답 형태의 실제 연동 검증 필요",
      ],
      decisions: [
        "기능 확장보다 Book Print API 호출·검증 중심으로 범위 고정",
        "Next.js API Routes를 서버 계층으로 사용해 키 노출 방지",
        "멱등성 키 기반 중복 주문 방지 흐름 반영",
      ],
      process: [
        "주문 생성에 필요한 입력, 이미지, 배송 정보 흐름 정리",
        "공식 문서와 실제 API 응답 비교 후 누락 필드 반영",
        "Claude, v0, ChatGPT를 기획·UI 초안·코드 검토 역할로 분리 활용",
      ],
      troubleshooting: [
        "문서와 실제 응답 차이 발견 후 요청 구조 재검증",
        "클라이언트 직접 호출 구조를 서버 라우트 기반 호출 구조로 전환",
      ],
      result: [
        "포토북 주문 흐름의 핵심 API 호출 검증",
        "제한된 기간 내 안정 동작 가능한 서비스 초안 완성",
      ],
    },
  },
  {
    slug: "linkle",
    title: "Linkle",
    subtitle: "소셜 링크 공유 플랫폼",
    period: "2024.10 ~ 2025.01",
    team: "5인",
    role: "프론트엔드 개발 / 팀 리더",
    type: "팀",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    summary: "이미지 시안 기반 UI를 Tailwind 토큰과 재사용 컴포넌트로 정리하고 다크모드·접근성까지 확장",
    coreProblem: "정적 이미지 중심 시안으로 인한 디자인 규칙, 테마 확장, 협업 기준의 코드화 필요",
    keywords: ["Design System", "Dark Mode", "Accessibility", "CI/CD"],
    links: {
      github: "https://github.com/Mt-NextJs/linkle",
      demo: "https://linkle-nine.vercel.app/",
    },
    detail: {
      context: "소셜 링크를 한 페이지에 모아 보여주는 서비스. 짧은 스프린트 안에서 UI 완성도와 팀 협업 흐름을 동시에 맞춰야 하는 상황",
      constraints: [
        "이미지 형태 시안 기반의 색상·간격·컴포넌트 규칙 재정의 필요",
        "Next.js SSR 환경에서 시스템 테마와 사용자 지정 테마 동시 지원 필요",
        "다인 개발 환경에서 이슈, PR, 배포 기준 필요",
      ],
      decisions: [
        "Tailwind 전역 설정 기반 디자인 토큰 정리",
        "시스템 테마와 사용자 지정 테마의 우선순위 기준 설정",
        "GitHub Actions와 Vercel 기반 배포 자동화 구성",
      ],
      process: [
        "공통 UI 패턴 추출 및 재사용 컴포넌트 구성",
        "ARIA 라벨과 시맨틱 HTML 적용을 통한 접근성 개선",
        "이슈·PR 중심 작업 단위 관리와 스프린트 단위 병합",
      ],
      troubleshooting: [
        "SSR 환경의 테마 hydration mismatch 문제 해결",
        "이미지 시안의 시각 값 복제 대신 확장 가능한 간격·색상 규칙으로 재정리",
      ],
      result: [
        "다크 테마와 접근성 개선을 포함한 사용자 설정 기반 UI 구현",
        "팀 개발을 위한 저장소, 컨벤션, 배포 파이프라인 구성",
      ],
    },
  },
  {
    slug: "modi",
    title: "MODI",
    subtitle: "음원 거래 플랫폼",
    period: "2023.11 ~ 2023.12",
    team: "3인",
    role: "기획 / 디자인 / 프론트엔드 개발 / 팀 리더",
    type: "팀",
    techStack: ["React", "TypeScript", "Vite", "Emotion", "TanStack Query", "Recoil", "Figma"],
    summary: "서비스 컨셉과 UI 흐름 설계, 토큰 갱신 중복 요청 제어를 통한 인증 흐름 안정화",
    coreProblem: "토큰 만료 시 동시 API 실패로 refresh 요청이 중복 발생할 수 있는 인증 흐름 불안정성",
    keywords: ["Auth Flow", "Axios Interceptor", "Loading UX", "Figma"],
    links: {
      github: "https://github.com/techitPlus-FE-team3/open_market_projerct",
      demo: "https://develop--ip3-modi.netlify.app/",
    },
    detail: {
      context: "음원 거래 플랫폼의 기획, UI 디자인, 프론트엔드 구현을 병행한 팀 프로젝트. 기능 구현과 서비스 흐름 공유가 동시에 필요한 상황",
      constraints: [
        "짧은 기간 내 서비스 컨셉, 디자인 시스템, 주요 기능 구현 병행",
        "인증 만료 시 다중 요청 실패 가능성",
        "API 응답 지연 상황의 사용자 상태 인지 필요",
      ],
      decisions: [
        "Figma 기반 주요 흐름과 컴포넌트 기준 선정",
        "토큰 갱신 단일 흐름 제어와 중복 refresh 요청 방지",
        "스켈레톤 UI와 로딩 스피너를 통한 대기 상태 표시",
      ],
      process: [
        "서비스 컨셉, 와이어프레임, 디자인 시스템 구성",
        "Axios Interceptor 기반 인증 처리와 TanStack Query 기반 API 상태 관리",
        "README와 Wiki 기반 의사결정 및 개발 과정 문서화",
      ],
      troubleshooting: [
        "동시 요청 상황의 refresh 중복 발생 문제를 단일 갱신 흐름으로 정리",
        "응답 지연 시 빈 화면처럼 보이는 문제를 상태 표시 UI로 완화",
      ],
      result: [
        "기획, UI 설계, 인증 안정화를 연결한 프론트엔드 경험 확보",
        "반복 UI의 재사용 구조 정리로 기능 확장 부담 축소",
      ],
    },
  },
];

export const careerSummary = [
  {
    title: "어바스디자인",
    meta: "프론트엔드 개발자 · 2025.08 ~ 2025.09",
    description: "관리자 시스템과 기업 소개 사이트 개발. 데이터 중심 화면 구조화와 서버리스 API 연동 경험",
  },
  {
    title: "프로젝트 기반 교육",
    meta: "2022.11 ~ 2024.11",
    description: "React, Next.js 기반 팀 프로젝트. 기획, UI 구현, 협업 환경 구성, 배포 자동화 반복 수행",
  },
];

export const education = {
  school: "단국대학교(죽전 캠퍼스)",
  degree: "패션산업디자인 전공 · SW융합콘텐츠전공 부전공",
  period: "2015.03 ~ 2022.08",
};

export const credentials = [
  "컴퓨터그래픽기능사",
  "GTQi 일러스트 1급 / GTQ 1급",
  "TOEIC 720점 · TOEIC Speaking IH",
  "참여 교육 우수 수료상",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
