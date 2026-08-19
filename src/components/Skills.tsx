import { skillGroups } from "../data"
import { useReveal } from "../hooks"

export default function Skills() {
  const head = useReveal()
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[#303030] bg-[#181818] py-24 sm:py-32">
      <div className="wrap">
        <div ref={head.ref} style={head.style} className={head.className}>
          <p className="eyebrow mb-5">能力栈</p>
          <h2 className="display-xl max-w-3xl">用什么把事情做出来。</h2>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((g, gi) => {
            const r = useReveal(gi * 70)
            return (
              <div
                key={g.name}
                ref={r.ref}
                style={r.style}
                className={r.className}
              >
                <div className="flex items-baseline justify-between border-b border-[#303030] pb-4">
                  <h3 className="title-md">{g.name}</h3>
                  <span className="text-[12px] text-[#666]">{g.items.length} 项</span>
                </div>
                <ul className="mt-1">
                  {g.items.map((it) => (
                    <li
                      key={it.label}
                      className="flex items-baseline justify-between gap-6 border-b border-[#262626] py-4"
                    >
                      <span className="text-[15px] text-white">{it.label}</span>
                      <span className="body-sm shrink-0 text-right text-[#969696]">
                        {it.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
