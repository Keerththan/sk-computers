import { DollarSign, Sparkles, Zap, Award, Heart, Truck, CheckCircle } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Our services are the most cost-effective in town.",
  },
  {
    icon: Zap,
    title: "Swift Solutions",
    description: "Experience the fastest service turnaround without compromising quality.",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description: "Trust our certified technicians for top-notch repairs.",
  },
  {
    icon: Truck,
    title: "On-the-Go Convenience",
    description: "We bring our expertise to you.",
  },
  {
    icon: CheckCircle,
    title: "Complimentary Assurance",
    description: "Benefit from free testing and diagnostics with every service.",
  },
  {
    icon: Heart,
    title: "Professional Relationships",
    description: "Building lasting relationships with our customers through quality service.",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#111118]">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#466384]/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="mx-auto inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] px-5 py-2 text-sm font-medium text-[#a0a0a8] rounded-full">
            <Sparkles className="h-4 w-4 text-[#5a7a9a]" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Experience The SK Computers Difference</h2>
          <p className="mx-auto max-w-3xl text-lg text-[#a0a0a8]">
            Six core promises that keep our community coming back. From cost-effective repairs to white-glove
            service, we focus on delivering trustworthy experiences at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#2a2a35] bg-[#0a0a0f] p-8 transition-all duration-300 hover:border-[#466384]/50"
            >
              <div className="relative flex flex-col gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#466384] text-white">
                  <feature.icon className="h-7 w-7" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-[#a0a0a8] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

