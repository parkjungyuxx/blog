import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="flex justify-between items-start mb-12">
        <h1 className="text-[80px] font-bold text-black">Resume</h1>
        <Link href="/" className="text-[20px] text-black hover:underline">
          / HOME
        </Link>
      </div>

      <div className="mb-16">
        <table className="w-full border-t-2 border-b border-black">
          <thead>
            <tr className="border-b border-black">
              <th className="text-left py-4 px-4 font-mono text-sm">ID /</th>
              <th className="text-left py-4 px-4 font-mono text-sm">
                POSITION /
              </th>
              <th className="text-left py-4 px-4 font-mono text-sm">
                DESCRIPTION /
              </th>
              <th className="text-left py-4 px-4 font-mono text-sm">
                CONTACT /
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-4 align-top">
                <div className="text-black">박준규</div>
                <div className="text-black text-sm">1998.02.04</div>
              </td>
              <td className="py-4 px-4 align-top">
                <div className="text-black">Frontend Developer</div>
              </td>
              <td className="py-4 px-4 align-top">
                <div className="text-black">
                  끊임없이 고민하고, 해결을 통해 성과를 만듭니다.
                </div>
              </td>
              <td className="py-4 px-4 align-top flex flex-col">
                <div className="text-black underline">
                  parkjungyu09@gmail.com
                </div>
                <Link
                  href="https://github.com/parkjungyuxx"
                  className="text-black underline cursor-pointer"
                  target="blank"
                >
                  github.com/parkjungyuxx
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 프로젝트 1 - cats-paw */}
      <div className="mb-16">
        <div className="mb-6">
          <Link
            href="https://github.com/devcourse-catspaw/catspaw"
            className="gradient-link text-[32px] font-bold mb-2 inline-block relative no-underline text-black overflow-hidden cursor-pointer"
            target="_blank"
          >
            <span className="relative inline-block">
              Cat&apos;s paw
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-[rgb(245,143,0)] via-50% to-transparent to-100% bg-[length:200%_100%] bg-clip-text text-transparent opacity-100"
                style={{
                  animation: "gradient 4s ease-in-out infinite",
                }}
              >
                Cat&apos;s paw
              </span>
            </span>
          </Link>
          <div className="text-black text-sm">Frontend</div>
          <div className="text-black text-sm">
            Total Team Size: 4 People (4 FE)
          </div>
          <div className="text-black text-sm">2025.05 - present</div>
        </div>

        <table className="w-full border-t border-b border-black">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-6 px-4 align-top w-1/3">
                <div className="text-black font-medium mb-2">
                  주요 기여 및 담당 기능
                </div>
              </td>
              <td className="py-6 px-4 align-top w-2/3">
                <div className="text-black mb-4">
                  Cats&apos;Paw 프로젝트의 싱글 모드와 실시간 채팅 기능을
                  구현했습니다. 프로젝트 기획부터 디자인까지 전 과정에
                  참여하였으며, 현재도 이 프로젝트에 대한 애정을 가지고 지속적인
                  유지보수와 리팩토링 작업을 진행하며 서비스의 완성도를 꾸준히
                  높여가고 있습니다.
                </div>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li className="leading-normal">
                   싱글모드 구현

                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - Google Teachable Machine을 활용한 AI 기반 1인 플레이
                        모드 구현.
                      </li>
                      <li>
                        - AI 예측 대기 시간 동안 사용자의 불안감 해소를 위해
                        Custom Hook 기반의 5단계 진행 메시지 및 프로그레스 바
                        인터랙션 구현.
                      </li>
                    </ul>
                  </li>
                  <li>
                    드로잉 툴세트 구현
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - Konva.js와 Canvas API를 활용하여 드로잉 툴 세트 구현.
                      </li>
                    </ul>
                  </li>
                  <li>
                    실시간 채팅 구현
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>- Supabase Realtime 기반 실시간 채팅 구현</li>
                    </ul>
                  </li>
                </ul>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 border border-black text-sm">
                    #React
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #TypeScript
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #TailwindCSS
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #React Router
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #Supabase
                  </span>
                </div>
              </td>
            </tr>

            <tr className="border-b border-gray-300">
              <td className="py-6 px-4 align-top w-1/3">
                <div className="text-black font-medium mb-2">성과</div>
              </td>
              <td className="py-6 px-4 align-top w-2/3">
                <div className="text-black mb-4">진행적인 인터렉션 구현</div>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>
                    싱글모드 게임 최적화
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 3.2초 이상 소요되던 모델 재로딩 문제 발생 → 모델
                        인스턴스를 컴포넌트 외부에 전역적으로 저장하고 캐싱 로직
                        구현. 재사용 시 응답 시간을 0.05초로 단축 달성
                      </li>
                    </ul>
                  </li>
                  <li>
                    폰트 최적화
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 폰트 파일 로딩 지연으로 인한 텍스트 깜빡임 문제 발생 →
                        폰트 서브셋 작업을 통해 용량을 54KB에서 5KB로 축소.
                        이로써 부자연스러운 텍스트 노출 현상 제거
                      </li>
                    </ul>
                  </li>
                  <li>
                    실시간 통신 안정성
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - Supabase Realtime 채팅 기록을 DB에 저장하고 데이터
                        지속성을 확보하여, 새로고침 및 재진입 시에도 대화 내용이
                        유실되지 않는 안정적인 소통 환경 구축
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 프로젝트 2 - ittaeok */}
      <div className="mb-16">
        <div className="mb-6">
          <Link
            href="https://github.com/prgrms-web-devcourse-final-project/WEB4_5_DOD_FE"
            className="gradient-link text-[32px] font-bold mb-2 inline-block relative no-underline text-black overflow-hidden cursor-pointer"
            target="_blank"
          >
            <span className="relative inline-block">
              Ittaeok
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-[rgb(245,143,0)] via-50% to-transparent to-100% bg-[length:200%_100%] bg-clip-text text-transparent opacity-100"
                style={{
                  animation: "gradient 4s ease-in-out infinite",
                }}
              >
                Ittaeok
              </span>
            </span>
          </Link>
          <div className="text-black text-sm">Frontend Developer</div>
          <div className="text-black text-sm">
            Total Team Size: 10 People (5 FE, 5 BE)
          </div>
          <div className="text-black text-sm">2025.06 - 2025.08</div>
        </div>

        <table className="w-full border-t border-b border-black">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-6 px-4 align-top w-1/3">
                <div className="text-black font-medium mb-2">
                  주요 기여 및 담당 기능
                </div>
              </td>
              <td className="py-6 px-4 align-top w-2/3">
                <div className="text-black mb-4">
                  이때어때 프로젝트에서 사용자가 일정을 편리하게 조율하도록 돕는
                  것을 목표로, 그룹 모임 관리 기능 개발을 담당했습니다. 그룹
                  모임의 통계를 시각적으로 제공하고 멤버 관리를 지원하여 그룹
                  관리의 효율을 높이는 데 기여했습니다. 이와 함께 오프라인 일정
                  관리 기능을 구현했으며, 프로젝트 기획부터 디자인까지 전 과정에
                  참여했습니다.
                </div>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>
                    랜딩 페이지 인터랙션 구현
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>- GSAP을 활용한 스크롤 기반 애니메이션 구현.</li>
                    </ul>
                  </li>
                  <li>
                    그룹 관리 및 데이터 시각화
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - Chart.js를 활용한 그룹 통계 시각화 및 멤버 관리 기능
                        구현.
                      </li>
                    </ul>
                  </li>
                  <li>
                    간편 초대 및 진입 흐름
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 카카오톡 공유 API를 통한 초대 및 사용자의 그룹/일정
                        자동 참여 기능 구현.
                      </li>
                    </ul>
                  </li>
                  <li>
                    온라인 모임 통합 관리
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 워크스페이스 링크(Notion, Figma 등) 및 온라인 회의장
                        링크 등록 및 관리 기능 구현.
                      </li>
                    </ul>
                  </li>
                  <li>
                    재사용 가능한 캘린더 컴포넌트 개발
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - react-day-picker 기반으로 주간/월간 뷰 선택이 가능한
                        커스텀 캘린더 컴포넌트 구현.
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-3 py-1 border border-black text-sm">
                    #Next.js
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #TypeScript
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #TailwindCSS
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #Tanstack Query
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #Zustand
                  </span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-6 px-4 align-top w-1/3">
                <div className="text-black font-medium mb-2">성과</div>
              </td>
              <td className="py-6 px-4 align-top w-2/3">
                <div className="text-black mb-4">진행적인 인터렉션 구현</div>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>
                    초대 흐름 안정성 확보
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 로그인/비로그인 시나리오 분기 처리 로직 설계. 비로그인
                        시 localstorage에 리다이렉트 주소(초대 정보)를 저장하여,
                        로그인 후 초대 정보 유실 방지 및 자동 합류 구현.
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 프로젝트 3 - popcon */}
      <div className="mb-16">
        <div className="mb-6">
          <Link
            href="https://github.com/devcourse-team3-popcon/popcon"
            className="gradient-link text-[32px] font-bold mb-2 inline-block relative no-underline text-black overflow-hidden cursor-pointer"
            target="_blank"
          >
            <span className="relative inline-block">
              POPcon
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-[rgb(245,143,0)] via-50% to-transparent to-100% bg-[length:200%_100%] bg-clip-text text-transparent opacity-100"
                style={{
                  animation: "gradient 4s ease-in-out infinite",
                }}
              >
                POPcon
              </span>
            </span>
          </Link>
          <div className="text-black text-sm">Frontend Developer</div>
          <div className="text-black text-sm">
            Total Team Size: 5 People (5 FE)
          </div>
          <div className="text-black text-sm">2025.04 - 2025.05</div>
        </div>

        <table className="w-full border-t border-b border-black">
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-6 px-4 align-top w-1/3">
                <div className="text-black font-medium mb-2">
                  주요 기여 및 담당 기능
                </div>
              </td>
              <td className="py-6 px-4 align-top w-2/3">
                <div className="text-black mb-4">
                  POPcon 프로젝트에서 팀장을 맡아 전반적인 프로젝트 리드를
                  담당했으며, 서비스의 핵심인 개인화된 플레이리스트 기능을
                  구현했습니다.
                </div>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>
                    GPT 기반 플레이리스트 기능 구현
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 사용자 플레이리스트 데이터를 활용하여 GPT 추천 기능
                        구현
                      </li>
                    </ul>
                  </li>
                  <li>
                    노래 검색 기능 구현
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - Spotify API를 활용한 노래 검색 및 데이터 호출 기능
                        구현
                      </li>
                    </ul>
                  </li>
                  <li>
                    다크모드/라이트모드 구현
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - document.documentElement의 클래스 조작과 CSS 변수를
                        활용하여 다크모드/라이트모드 색상 전환 구현.
                      </li>
                    </ul>
                  </li>
                  <li>URL 쿼리 기반 페이지네이션 구현</li>
                </ul>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="px-3 py-1 border border-black text-sm">
                    #React
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #TypeScript
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #TailwindCSS
                  </span>
                  <span className="px-3 py-1 border border-black text-sm">
                    #Zustand
                  </span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-6 px-4 align-top w-1/3">
                <div className="text-black font-medium mb-2">성과</div>
              </td>
              <td className="py-6 px-4 align-top w-2/3">
                <div className="text-black mb-4">진행적인 인터렉션 구현</div>
                <ul className="list-disc list-inside text-black space-y-1">
                  <li>
                    초대 흐름 안정성 확보
                    <ul className="list-none ml-6 mt-1 space-y-1">
                      <li>
                        - 로그인/비로그인 시나리오 분기 처리 로직 설계. 비로그인
                        시 localstorage에 리다이렉트 주소(초대 정보)를 저장하여,
                        로그인 후 초대 정보 유실 방지 및 자동 합류 구현.
                      </li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-black relative group">
        <Link
          href="https://github.com/parkjungyuxx"
          className="underline flex gap-4 items-center"
          target="_blank"
        >
          github.com/parkjungyuxx
        </Link>
      </div>
    </div>
  );
}
