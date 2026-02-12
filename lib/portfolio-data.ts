export type Project = {
  id: string;
  title: string;
  repoName: string;
  summary: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  imageUrl: string;
};

export type DeveloperProfile = {
  name: string;
  githubUsername: string;
  bio: string;
  skills: string[];
  contact: {
    email?: string;
    github?: string;
    blog?: string;
  };
};

export const developerProfile: DeveloperProfile = {
  name: "바이브 코딩",
  githubUsername: "bkuk69",
  bio: "프론트엔드와 백엔드, 실험적인 토이 프로젝트까지 다양한 작업을 하는 개발자입니다. Firebase Studio, Azure AI, Python 등 다양한 기술 스택을 활용해 실제 서비스를 만들어 보는 것을 좋아합니다.",
  skills: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Firebase",
    "Azure AI",
    "Python",
    "Node.js",
  ],
  contact: {
    email: "your-email@example.com",
    github: "https://github.com/bkuk69",
    blog: "https://your-blog.com",
  },
};

export const projects: Project[] = [
  {
    id: "vibe-coding-for-dummies",
    title: "Vibe Coding for Dummies",
    repoName: "bkuk69/vibe-coding-for-dummies",
    summary:
      "Firebase Studio, GitHub, Cursor를 활용해 코드 없이 실제 서비스를 만들어 보는 Vibe Coding 가이드입니다.",
    description:
      "Chris의 Vibe Coding 커뮤니티에서 제공하는 공식 예제를 포크해, Firebase Studio와 GitHub, Cursor를 연결해 보는 실습 프로젝트입니다. 전통적인 코딩 대신 노코드/로우코드 도구를 활용해 웹 앱을 빠르게 프로토타이핑하고 배포하는 흐름을 따라가며, 실제 서비스 수준의 결과물을 만드는 것을 목표로 합니다.",
    techStack: ["Firebase Studio", "GitHub", "Cursor", "노코드"],
    githubUrl: "https://github.com/bkuk69/vibe-coding-for-dummies",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "get-started-with-ai-chat",
    title: "Get Started with AI Chat",
    repoName: "bkuk69/get-started-with-ai-chat",
    summary:
      "Azure AI Foundry와 SDK를 활용해 채팅 웹 앱을 배포하는 기본 예제 프로젝트입니다.",
    description:
      "Microsoft에서 제공하는 Azure AI Foundry 샘플을 포크해, AI 챗봇 웹 애플리케이션을 직접 배포해 보는 프로젝트입니다. 클라우드 환경에서 모델을 설정하고, SDK를 이용해 프론트엔드와 연동하며, 실제로 대화형 인터페이스를 서비스하는 전 과정을 경험할 수 있습니다.",
    techStack: ["Azure AI", "SDK", "웹 챗봇"],
    githubUrl: "https://github.com/bkuk69/get-started-with-ai-chat",
    imageUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "voicebotest",
    title: "Voice Bot Test",
    repoName: "bkuk69/voicebotest",
    summary:
      "Python으로 음성을 인식하고 응답하는 보이스 봇을 실험한 작은 테스트 프로젝트입니다.",
    description:
      "음성 인식과 합성 기술을 활용해 간단한 보이스 챗봇을 만들어 본 실험용 저장소입니다. 마이크 입력을 받아 텍스트로 변환하고, AI 모델을 통해 응답을 생성한 뒤 다시 음성으로 재생하는 흐름을 구현하는 것을 목표로 합니다.",
    techStack: ["Python", "음성 인식", "음성 합성"],
    githubUrl: "https://github.com/bkuk69/voicebotest",
    imageUrl:
      "https://images.unsplash.com/photo-1520127877998-020a56678a64?auto=format&fit=crop&w=1000&q=80",
  },
];
