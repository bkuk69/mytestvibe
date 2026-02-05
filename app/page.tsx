export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-black dark:text-zinc-50">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-16">
        {/* 헤더 / 소개 섹션 */}
        <section className="flex flex-col gap-4 border-b border-zinc-200 pb-10 dark:border-zinc-800">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Portfolio
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            바이브 코딩 첫 Next.js 프로젝트
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            이곳은 제가 공부하고 만들어 온{" "}
            <span className="font-semibold text-zinc-900 dark:text-zinc-50">
              개발 결과물
            </span>
            을 모아두는 포트폴리오입니다. 프론트엔드와 백엔드, 실험적인 토이
            프로젝트까지 다양한 작업들을 정리해 두었습니다.
          </p>
        </section>

        {/* 프로젝트 섹션 */}
        <section className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-3">
            <h2 id="projects" className="text-2xl font-semibold">
              프로젝트
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              최근에 작업한 프로젝트들입니다.
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* 프로젝트 카드 예시 1 */}
            <article className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700">
              <h3 className="text-lg font-semibold">
                프로젝트 이름을 여기에
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                프로젝트에 대한 간단한 설명을 적어 주세요. 어떤 기술을
                사용했는지, 무엇을 해결하기 위한 프로젝트인지 짧게 정리해
                두면 좋습니다.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  Next.js
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  TypeScript
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  Tailwind CSS
                </span>
              </div>
            </article>

            {/* 프로젝트 카드 예시 2 */}
            <article className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80 dark:hover:border-zinc-700">
              <h3 className="text-lg font-semibold">
                두 번째 프로젝트 제목
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                여기에도 다른 결과물을 채워 넣을 수 있습니다. 나중에 실제
                GitHub 링크나 배포 링크를 연결해 두면 포트폴리오 활용도가
                높아집니다.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  React
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
                  API
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* 연락 섹션 */}
        <section
          id="contact"
          className="mt-4 flex flex-col gap-4 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-zinc-900/40"
        >
          <h2 className="text-xl font-semibold">연락하기</h2>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            협업 제안이나 피드백, 기타 문의가 있다면 아래 연락처로 편하게
            연락 주세요. 추후에는 이 섹션에 간단한 폼이나 SNS 링크를 추가해도
            좋습니다.
          </p>
          <ul className="text-sm text-zinc-700 dark:text-zinc-300">
            <li>이메일: your-email@example.com</li>
            <li>GitHub: https://github.com/your-id</li>
            <li>블로그: https://your-blog.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
