import { DollarSign, Sparkles, Zap, Award, Heart, Truck, CheckCircle } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Our services are the most cost-effective in town.",
    gradient: "from-emerald-400/90 via-emerald-500/90 to-emerald-400/70"
  },
  {
    icon: Zap,
    title: "Swift Solutions",
    description: "Experience the fastest service turnaround without compromising quality.",
    gradient: "from-sky-400/90 via-sky-500/90 to-indigo-400/70"
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Trust our certified technicians for top-notch repairs.",
    gradient: "from-violet-400/90 via-purple-500/90 to-fuchsia-400/70"
  },
  {
    icon: Truck,
    title: "On-the-Go Convenience",
    description: "We bring our expertise to you.",
    gradient: "from-amber-400/90 via-orange-500/90 to-rose-400/70"
  },
  {
    icon: CheckCircle,
    title: "Complimentary Assurance",
    description: "Benefit from free testing and diagnostics with every service.",
    gradient: "from-teal-400/90 via-teal-500/90 to-cyan-400/70"
  },
  {
    icon: Heart,
    title: "Professional Relationships",
    description: "Building lasting relationships with our customers through quality service.",
    gradient: "from-yellow-300/90 via-yellow-400/90 to-amber-400/70"
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f161d] via-[#1d2b3b] to-[#466384]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[#0f161d]/70 mix-blend-overlay" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-md shadow-lg">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Experience The SK Computers Difference</h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-200/80">
            Six core promises that keep our community coming back. From cost-effective repairs to white-glove
            service, we focus on delivering trustworthy experiences at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-[0_20px_45px_rgba(15,22,29,0.45)]"
            >
              <div className="pointer-events-none absolute -right-12 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:opacity-80" />
              <div className="pointer-events-none absolute -bottom-12 -left-14 h-36 w-36 rounded-full bg-[#466384]/20 blur-3xl" />

              <div className="relative flex flex-col gap-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-xl shadow-black/10 transition-transform duration-500 group-hover:scale-105`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-slate-200/85">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
