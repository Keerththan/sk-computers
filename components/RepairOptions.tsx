import { Card, CardContent } from "./ui/card"
import { Monitor, Zap, Cpu, HardDrive, Droplets, Settings, ArrowRight, Sparkles, Wrench, RotateCcw } from "lucide-react"

const repairOptions = [
  {
    icon: Monitor,
    title: "Broken Screen",
    description: "We offer professional expertise to restore the damaged screens on various devices such as computers, laptops, iMacs and MacBooks.",
    color: "blue-500"
  },
  {
    icon: Zap,
    title: "Slow Computer or Mac",
    description: "Give your laptop a turbo boost! Our tune-up sweeps away junk files and optimizes startup, leaving you with a zippy machine.",
    color: "green-500"
  },
  {
    icon: Cpu,
    title: "Chip Level Repair",
    description: "Experience precision and expertise with our chip-level repair, ensuring a tailored and comprehensive solution for your devices.",
    color: "purple-500"
  },
  {
    icon: HardDrive,
    title: "Soft & Hardware Upgrade",
    description: "Stay up-to-date with the latest technology by availing our software and hardware upgrade services.",
    color: "orange-500"
  },
  {
    icon: Droplets,
    title: "Water Spill",
    description: "Fear not if your MacBook or laptop takes a plunge in a water spill – We understand the urgency and are here to revive your device!",
    color: "teal-500"
  },
  {
    icon: RotateCcw,
    title: "Repair Broken Hinges",
    description: "Hinges on the blink? Our laptop hinge heroes can fix or replace them, restoring smooth screen action!",
    color: "yellow-500"
  },
]

export default function RepairOptions() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#466384]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a3c51]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#466384] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            What We Do
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">What we do</h2>
          <p className="text-3xl font-semibold text-gray-700 mb-4">
            Give your computers a second life:
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Repairs, Upgrades, and Expert care for any tech failures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairOptions.map((option, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 bg-${option.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
                  <option.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">{option.description}</p>
                <div className="flex items-center text-[#466384] font-semibold group-hover:text-[#2a3c51] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
