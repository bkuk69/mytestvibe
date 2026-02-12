"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription, 
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Project = {
  id: string;
  title: string;
  repoName: string;
  summary: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  imageUrl: string;
};

const projects: Project[] = [
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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-16">
        {/* 헤더 / 소개 섹션 */}
        <section className="grid gap-8 border-b border-border pb-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-secondary-foreground">
              Portfolio
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              바이브 코딩 첫 Next.js 프로젝트
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              이곳은 제가 공부하고 만들어 온{" "}
              <span className="font-semibold text-foreground">
                개발 결과물
              </span>
              을 모아두는 포트폴리오입니다. 프론트엔드와 백엔드, 실험적인 토이
              프로젝트까지 다양한 작업들을 정리해 두었습니다.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="sm">주요 프로젝트 보기</Button>
              <Button variant="outline" size="sm">
                GitHub 프로필 열기
              </Button>
            </div>
          </div>

          <div className="relative mt-2 h-48 w-full overflow-hidden rounded-2xl border border-border bg-muted/40 sm:h-56 md:h-64">
            <Image
              src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
              alt="노트북으로 코딩 중인 개발자 책상"
              fill
              priority
              sizes="(min-width: 768px) 360px, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3">
            <h2 id="projects" className="text-2xl font-semibold">
              프로젝트
            </h2>
            <span className="text-sm text-muted-foreground">최근에 작업한 프로젝트들입니다.</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="group flex flex-col overflow-hidden">
                <div className="relative h-40 w-full overflow-hidden border-b border-border/60 bg-muted/40">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.summary}</CardDescription>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedProject(project)}
                    >
                      상세 보기
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 연락 섹션 */}
        <section
          id="contact"
          className="mt-4 flex flex-col gap-4 rounded-2xl border border-dashed border-border bg-muted/40 p-6"
        >
          <h2 className="text-xl font-semibold">연락하기</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            협업 제안이나 피드백, 기타 문의가 있다면 아래 연락처로 편하게
            연락 주세요. 추후에는 이 섹션에 간단한 폼이나 SNS 링크를 추가해도
            좋습니다.
          </p>
          <ul className="text-sm text-foreground/80">
            <li>이메일: your-email@example.com</li>
            <li>GitHub: https://github.com/your-id</li>
            <li>블로그: https://your-blog.com</li>
          </ul>
        </section>

        {/* 프로젝트 상세 보기 모달 */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-background shadow-xl">
              <div className="flex items-start justify-between border-b border-border px-5 py-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    GitHub 저장소: {selectedProject.repoName}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-md p-1 text-muted-foreground hover:bg-muted"
                  aria-label="닫기"
                >
                  ✕
                </button>
              </div>
              <div className="px-5 py-4 space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  GitHub에서 코드 보기
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
