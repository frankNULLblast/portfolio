import { projects } from "../data"
import { useReveal } from "../hooks"

export default function Projects() {
  const head = useReveal()
  return (
    <section id="work" className="scroll-mt-20 border-t border-[#303030] bg-[#181818] py-24 sm:py-32">
      <div className="wrap">
        <div ref={head.ref} style={head.style} className={head.className}>
          <p className="eyebrow mb-5">精选作品</p>
          <h2 className="display-xl max-w-3xl">六块能直接讲的项目。</h2>
        </div>

        <div className="mt-14 grid gap-px bg-[#303030] sm:grid-cols-2">
          {projects.map((p, i) => {
            const r = useReveal(i * 60)
            return (
              <article
                key={p.index}
                ref={r.ref}
                style={r.style}
                className={`${r.className} group flex flex-col bg-[#181818] p-8 transition-colors duration-300 hover:bg-[#1f1f1f]`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-medium text-[#da291c]">{p.index}</span>
                  {p.status && (
                    <span className="border border-[#303030] px-3 py-1 text-[11px] uppercase tracking-[1px] text-[#969696]">
                      {p.status}
                    </span>
                  )}
                </div>

                <h3 className="title-md mt-6 text-[19px] leading-snug">{p.title}</h3>
                <p className="body-md mt-4 flex-1 text-[14px] leading-relaxed">
                  {p.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#303030] px-2.5 py-1 text-[11px] text-[#c9c9c9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link.href}
                  className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.65px] text-white transition-colors group-hover:text-[#da291c]"
                >
                  {p.link.label}
                  <span aria-hidden>→</span>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
