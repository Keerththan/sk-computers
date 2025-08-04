import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight, Sparkles, Laptop, Monitor, Wrench, Shield, HardDrive, Settings } from "lucide-react"

const galleryImages = [
  {
    title: "Laptop Screen Repair",
    description: "Professional screen replacement for all laptop brands with precision tools",
    icon: Laptop,
    category: "Hardware Repair",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "MacBook Component Repair",
    description: "Chip-level repair services for MacBook logic boards and components",
    icon: Monitor,
    category: "Apple Repair",
    gradient: "from-gray-600 to-gray-800"
  },
  {
    title: "Computer Diagnostic Station",
    description: "Advanced diagnostic equipment for accurate problem identification",
    icon: Wrench,
    category: "Diagnostics",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Virus Removal & Optimization",
    description: "Complete virus removal and system optimization services",
    icon: Shield,
    category: "Software",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Hardware Upgrade Station",
    description: "RAM, SSD, and hardware upgrades for improved performance",
    icon: HardDrive,
    category: "Upgrades",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Quality Testing & Warranty",
    description: "Comprehensive testing to ensure perfect functionality",
    icon: Settings,
    category: "Quality Control",
    gradient: "from-teal-500 to-blue-500"
  },
]

export default function InsideFixfactor() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${image.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <image.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{image.title}</h3>
                    <p className="text-gray-600 text-sm">{image.description}</p>
                  </div>
                  <div className="text-teal-600 group-hover:text-teal-700 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <span>View All Photos</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
