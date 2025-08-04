import { Card, CardContent } from "./ui/card"
import { Monitor, Zap, Wrench, HardDrive, Droplets, Settings } from "lucide-react"

const repairOptions = [
  {
    icon: Monitor,
    title: "Broken Screen",
    description: "We offer professional expertise to restore the damaged screens on various devices such as computers, laptops, iMacs and MacBooks.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Zap,
    title: "Slow Computer or Mac",
    description: "Give your laptop a turbo boost! Our tune-up sweeps away junk files and optimizes startup, leaving you with a zippy machine.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Wrench,
    title: "Chip Level Repair",
    description: "Experience precision and expertise with our chip-level repair, ensuring a tailored and comprehensive solution for your devices.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: HardDrive,
    title: "Soft & Hardware Upgrade",
    description: "Stay up-to-date with the latest technology by availing our software and hardware upgrade services.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Droplets,
    title: "Water Spill",
    description: "Fear not if your MacBook or laptop takes a plunge in a water spill – We understand the urgency and are here to revive your device!",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Settings,
    title: "Repair Broken Hinges",
    description: "Hinges on the blink? Our laptop hinge heroes can fix or replace them, restoring smooth screen action!",
    color: "bg-red-100 text-red-600",
  },
]

export default function RepairOptions() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What we do</h2>
          <p className="text-2xl font-semibold text-gray-700 mb-4">
            Give your computers a second life:
          </p>
          <p className="text-xl text-gray-600">
            Repairs, Upgrades, and Expert care for any tech failures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mb-6`}
                >
                  <option.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{option.description}</p>
                <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
