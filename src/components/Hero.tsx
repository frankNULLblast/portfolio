import { profile, intro } from "../data"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#181818]"
    >
      {/* cinematic depth: faint warm radial, no photo — restrained */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 18%, rgba(218,41,28,0.16), transparent 55%)",
        }}
      />
      {/* single voltage hairline signature */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[3px] bg-[#da291c] opacity-90" />

      <div className="wrap relative z-10 py-32">
        <p className="eyebrow mb-6">{profile.role}</p>
        <h1 className="display-mega max-w-4xl">
          你好，我是 {profile.name}
          <br />
          把大模型做成能干的工程系统。
        </h1>
        <p className="body-md mt-8 max-w-2xl text-[15px] leading-relaxed">
          {intro.lead}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn btn-primary">
            看作品
          </a>
          <a href="#contact" className="btn btn-outline">
            取得联系
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <p className="display-lg text-white">21</p>
            <p className="body-sm text-[#666]">天主线实习</p>
          </div>
          <div className="h-12 w-px bg-[#303030]" />
          <div>
            <p className="display-lg text-white">10/10</p>
            <p className="body-sm text-[#666]">验收通过率</p>
          </div>
          <div className="h-12 w-px bg-[#303030]" />
          <div>
            <p className="display-lg text-white">4</p>
            <p className="body-sm text-[#666]">条学习线</p>
          </div>
        </div>
      </div>
    </section>
  )
}
