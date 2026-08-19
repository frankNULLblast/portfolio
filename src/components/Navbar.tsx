import { profile } from "../data"
import { useScrollProgress } from "../hooks"

const links = [
  { href: "#work", label: "作品" },
  { href: "#skills", label: "技能" },
  { href: "#about", label: "关于" },
  { href: "#contact", label: "联系" },
]

export default function Navbar() {
  const p = useScrollProgress()
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#181818] border-b border-[#303030]">
        <nav className="wrap flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center bg-[#da291c] font-semibold text-white">
              {profile.name[0]}
            </span>
            <span className="text-[15px] font-medium text-white">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary !h-9 !px-6 !text-[12px]">
            合作
          </a>
        </nav>
      </div>
      <div className="h-[2px] w-full bg-transparent">
        <div className="h-full bg-[#da291c]" style={{ width: `${p * 100}%` }} />
      </div>
    </header>
  )
}
