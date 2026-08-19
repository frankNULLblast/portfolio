import { intro } from "../data"
import { useReveal } from "../hooks"

export default function About() {
  const r1 = useReveal()
  const r2 = useReveal(80)
  const r3 = useReveal(160)
  return (
    <section id="about" className="scroll-mt-20 bg-[#181818] py-24 sm:py-32">
      <div className="wrap">
        <div ref={r1.ref} style={r1.style} className={r1.className}>
          <p className="eyebrow mb-5">关于这段实习</p>
          <h2 className="display-xl max-w-3xl">
            不是功能的堆砌，<br />而是把复杂做出工程质感。
          </h2>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div ref={r2.ref} style={r2.style} className={r2.className}>
            <div className="space-y-6">
              {intro.paras.map((p, i) => (
                <p key={i} className="body-md text-[15px] leading-[1.75]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div ref={r3.ref} style={r3.style} className={r3.className}>
            <p className="title-md mb-6">这段时间长进了什么</p>
            <ul className="space-y-5">
              {intro.whatIGrew.map((g) => (
                <li key={g} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#da291c]" />
                  <span className="body-md text-[14px] leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
