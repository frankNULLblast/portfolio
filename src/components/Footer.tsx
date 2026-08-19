import { profile } from "../data"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#303030] bg-[#181818]">
      <div className="wrap flex flex-col items-start justify-between gap-6 py-16 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-[#da291c] font-semibold text-white">
            {profile.name[0]}
          </span>
          <div>
            <p className="text-[14px] font-medium text-white">{profile.name}</p>
            <p className="text-[12px] text-[#666]">{profile.role}</p>
          </div>
        </div>
        <p className="text-[12px] text-[#666]">
          © {year} {profile.name} · 用 Vite + React + Tailwind 手写，无重型依赖。
        </p>
      </div>
    </footer>
  )
}
