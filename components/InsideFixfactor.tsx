import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Sparkles, Laptop, Monitor, Wrench, Shield, HardDrive, Settings } from "lucide-react"

const galleryImages = [
  {
    title: "Laptop Screen Repair",
    description: "Professional screen replacement for all laptop brands with precision tools",
    icon: Laptop,
    category: "Hardware Repair",
    color: "blue-500"
  },
  {
    title: "MacBook Component Repair",
    description: "Chip-level repair services for MacBook logic boards and components",
    icon: Monitor,
    category: "Apple Repair",
    color: "gray-700"
  },
  {
    title: "Computer Diagnostic Station",
    description: "Advanced diagnostic equipment for accurate problem identification",
    icon: Wrench,
    category: "Diagnostics",
    color: "purple-500"
  },
  {
    title: "Virus Removal & Optimization",
    description: "Complete virus removal and system optimization services",
    icon: Shield,
    category: "Software",
    color: "green-500"
  },
  {
    title: "Hardware Upgrade Station",
    description: "RAM, SSD, and hardware upgrades for improved performance",
    icon: HardDrive,
    category: "Upgrades",
    color: "orange-500"
  },
  {
    title: "Quality Testing & Warranty",
    description: "Comprehensive testing to ensure perfect functionality",
    icon: Settings,
    category: "Quality Control",
    color: "teal-500"
  },
]

export default function InsideFixfactor() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#466384]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a3c51]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#466384] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Our Workshop
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Inside SK Computers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our state-of-the-art repair facilities and professional equipment where we bring your devices back to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 bg-${image.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <image.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {image.category}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#466384] transition-colors">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                  <div className="text-[#466384] group-hover:text-[#2a3c51] transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#466384] hover:bg-[#2a3c51] text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <span>View All Photos</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
