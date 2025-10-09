import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-8">
      <div className="flex justify-between items-start mb-12">
        <h1 className="text-[80px] font-bold text-black">About</h1>
        <Link href="/" className="text-[20px] text-black hover:underline">
          / HOME
        </Link>
      </div>

      <div className="grid grid-cols-[2fr_8fr] gap-8">
        <div>
          <table className="w-full border-t-2 border-black">
            <thead>
              <tr className="border-b border-black">
                <th className="text-left py-4 px-4 font-mono text-sm">
                  CONTACT & CHANNELS /
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4 px-4 align-top">
                  <div className="space-y-2">
                    <div className="text-black flex gap-4 items-center">
                      <MdOutlineAlternateEmail /> parkjungyu09@gmail.com
                    </div>
                    <div className="text-black">
                      <Link
                        href="https://github.com/parkjungyuxx"
                        className="underline flex gap-4 items-center"
                        target="_blank"
                      >
                        <FaGithub />
                        github.com/parkjungyuxx
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-8">
          {/* Description Table */}
          <div>
            <table className="w-full border-t-2 border-black">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left py-4 px-4 font-mono text-sm">
                    DESCRIPTION /
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 align-top">
                    <div className="text-black leading-relaxed">
                      <p className="mb-4 font-bold">
                        항상 고민하고 소통하며 문제를 해결하는 개발자
                        박준규입니다.
                      </p>
                      <p className="mb-4">
                        사용자 경험을 최우선으로 생각하며, 복잡한 문제를
                        단순하고 직관적인 해결책으로 풀어내는 것을 좋아합니다.
                        새로운 기술을 배우는 것에 열정적이며, 팀과의 협업을 통해
                        더 나은 결과를 만들어가는 과정을 즐깁니다.
                      </p>
                      <p className="mb-4">
                        React, Next.js, TypeScript를 주로 사용하며, 성능
                        최적화와 유지보수 용이성을 고려한 웹 애플리케이션 개발에
                        관심이 많습니다.
                      </p>
                      <p>
                        끊임없이 고민하고, 해결을 통해 성과를 만드는 개발자가
                        되고자 합니다.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Education Table */}
          <div>
            <table className="w-full border-t-2 border-black">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left py-4 px-4 font-mono text-sm">
                    EDUCATION /
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 align-top">
                    <div className="text-black space-y-3">
                      <div>
                        <div className="font-medium">프로그래머스 데브코스</div>
                        <ul className="text-sm text-gray-700">
                          프로그래머스 데브코스 4기 5회차 (2025.02 - 2025.08)
                          <li className="flex gap-1">
                            - 팀 프로젝트 3회(1차, 2차, 4차){" "}
                            <Link
                              href="https://drive.google.com/drive/folders/1Etvmjb7I08WfRogCvpAOsqcpKHs-YZqR?usp=drive_link"
                              className="gradient-link font-bold inline-block relative no-underline text-black overflow-hidden cursor-pointer"
                              target="_blank"
                            >
                              <span className="relative inline-block">
                                최우수상
                                <span
                                  className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-[rgb(245,143,0)] via-50% to-transparent to-100% bg-[length:200%_100%] bg-clip-text text-transparent opacity-100"
                                  style={{
                                    animation:
                                      "gradient 4s ease-in-out infinite",
                                  }}
                                >
                                  최우수상
                                </span>
                              </span>
                            </Link>{" "}
                            수상
                          </li>
                          <li>- 2차 프로젝트 팀장 경험</li>
                          <li className="flex items-center">
                            -{" "}
                            <Link
                              href="https://drive.google.com/drive/folders/1z4JC8x0Buk7-MKyAprkNLv3mAABqnQty?usp=drive_link"
                              className="gradient-link font-bold inline-block relative no-underline text-black overflow-hidden cursor-pointer pl-2"
                              target="_blank"
                            >
                              <span className="relative inline-block">
                                동료 평가
                                <span
                                  className="absolute inset-0 bg-gradient-to-r from-transparent from-0% via-[rgb(245,143,0)] via-50% to-transparent to-100% bg-[length:200%_100%] bg-clip-text text-transparent opacity-100"
                                  style={{
                                    animation:
                                      "gradient 4s ease-in-out infinite",
                                  }}
                                >
                                  동료 평가
                                </span>
                              </span>
                            </Link>
                            에서 전 항목 만점을 기록하며, 기술 역량과 협업
                            능력을 입증.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-medium">숭실대학교</div>
                        <div className="text-sm text-gray-700">
                          산업정보시스템공학과 전공 (2018.03 - 2025.02)
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Activities Table */}
          <div>
            <table className="w-full border-t-2 border-black">
              <thead>
                <tr className="border-b border-black">
                  <th className="text-left py-4 px-4 font-mono text-sm">
                    ACTIVITIES /
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 px-4 align-top">
                    <div className="text-black space-y-3">
                      <div>
                        <div className="font-medium">모브 스터디 그룹</div>
                        <div className="text-sm text-gray-700">
                          모각코 및 프론트엔드 기술 스터디 (2025.03 - present)
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
