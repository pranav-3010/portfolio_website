import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    n: "01",
    name: "Core Website Services",
    desc: "Creating robust, high-performance websites built to elevate your online presence. Built with speed, security, and responsive layouts to match your business goals.",
    features: [
      "Business websites",
      "3D animated websites",
      "Portfolio websites",
      "E-commerce stores"
    ]
  },
  {
    n: "02",
    name: "Design Services",
    desc: "Crafting modern, user-centric interfaces that convert. I focus on creating visually stunning and highly engaging layouts for all digital platforms.",
    features: [
      "Website UI/UX design",
      "Landing page design",
      "Dashboard design",
      "Mobile-responsive design",
      "Website redesigns"
    ]
  },
  {
    n: "03",
    name: "Automation Services",
    desc: "Streamlining your business processes and saving you valuable hours daily by connecting your tools and automating repetitive workflows.",
    features: [
      "Form → Google Sheets automation",
      "Email automation",
      "Appointment scheduling",
      "WhatsApp automation",
      "CRM integration"
    ]
  },
  {
    n: "04",
    name: "SEO Services",
    desc: "Helping your brand rank higher and load faster on search engines. I implement search engine best practices to drive high-quality organic traffic.",
    features: [
      "Technical SEO",
      "On-page SEO",
      "Website speed optimization"
    ]
  },
  {
    n: "05",
    name: "Maintenance Plans",
    desc: "Proactive care to keep your website running at peak performance. Sleep easy knowing your security, backups, and content updates are fully handled.",
    features: [
      "Website updates",
      "Hosting management",
      "Security monitoring",
      "Content updates",
      "Backup management",
      "Performance optimization"
    ]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]">
      <div
        className="
          max-w-7xl mx-auto
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-white/10
          bg-[#0C0C0C]
          px-6 sm:px-8 md:px-12
          py-12 sm:py-16 md:py-20
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
        "
      >
        {/* Title */}
        <FadeIn y={40}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              tracking-tight
              text-center
              mb-16 sm:mb-20 md:mb-28
              text-white
            "
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
            }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services */}
        <div className="max-w-5xl mx-auto">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.1} y={30}>
              <div
                className="
                  group
                  flex flex-col md:flex-row
                  md:items-center
                  gap-6 sm:gap-10 md:gap-14
                  py-8 sm:py-10 md:py-12
                  px-4 md:px-6
                  rounded-3xl
                  border border-transparent
                  transition-all duration-300
                  hover:bg-white/5
                  hover:border-white/10
                  hover:backdrop-blur-sm
                  hover:-translate-y-1
                "
                style={{
                  borderTop:
                    i === 0
                      ? "1px solid rgba(255,255,255,0.12)"
                      : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Number */}
                <div
                  className="
                    font-black
                    shrink-0
                    transition-all duration-300
                    group-hover:opacity-40
                  "
                  style={{
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div
                    className="
                      font-medium
                      uppercase
                      transition-all duration-300
                      group-hover:translate-x-2
                    "
                    style={{
                      color: "#FFFFFF",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {s.name}
                  </div>

                  <p
                    className="font-light leading-relaxed max-w-2xl mb-4"
                    style={{
                      color: "#FFFFFF",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    }}
                  >
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {s.features.map((feat) => (
                      <span
                        key={feat}
                        className="
                          px-3 py-1.5
                          rounded-full
                          text-xs sm:text-sm
                          bg-white/[0.04]
                          border border-white/10
                          text-white/80
                          font-light
                          transition-all duration-300
                          hover:bg-white/[0.08]
                          hover:text-white
                        "
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}