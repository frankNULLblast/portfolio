import { profile, socials } from "../data"
import { useReveal } from "../hooks"

export default function Contact() {
  const r = useReveal()
  return (
    <section id="contact" className="scroll-mt-20 bg-[#181818]">
      <div className="border-t border-[#303030]">
        <div className="wrap py-24 sm:py-[96px]">
          <div ref={r.ref} style={r.style} className={r.className}>
            <p className="eyebrow mb-5">一起做点东西</p>
            <h2 className="display-xl max-w-2xl">
              有个想法，<br />或只是想聊聊？
            </h2>
            <p className="body-md mt-6 max-w-xl text-[15px] leading-relaxed">
              我通常 24 小时内回复。无论是全职机会、自由项目，还是单纯的技术交流，都欢迎。
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary mt-10"
            >
              发邮件给我
            </a>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="nav-link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
