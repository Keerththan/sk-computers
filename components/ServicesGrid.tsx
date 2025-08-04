import { Card, CardContent } from "./ui/card"
import { Laptop, Monitor, Apple, Wrench, Battery, Shield, HardDrive, Smartphone, ArrowRight } from "lucide-react"

const services = [
  { 
    icon: Laptop, 
    label: "Laptop Repair", 
    desc: "Broken Screen, Slow Laptop, Broken Hinges, Tune Up, Software & Hardware Upgrade, No Power On",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: Monitor, 
    label: "Computer Repair", 
    desc: "Broken Screen, Slow Computer, Tune Up, Software & Hardware Upgrade, No Power On",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: Apple, 
    label: "MacBook & iMac", 
    desc: "Broken Screen, OS Upgrade, Tune Up, Battery Replacement, Storage Upgrade",
    gradient: "from-gray-600 to-gray-800"
  },
  { 
    icon: Wrench, 
    label: "Chip Level Repair", 
    desc: "Precision and expertise with chip-level repair for comprehensive solutions",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    icon: HardDrive, 
    label: "Soft & Hardware Upgrade", 
    desc: "Stay up-to-date with the latest technology upgrades",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    icon: Shield, 
    label: "Virus Removal", 
    desc: "Your go-to for virus eviction and device optimization",
    gradient: "from-teal-500 to-blue-500"
  },
  { 
    icon: Battery, 
    label: "Battery Replacement", 
    desc: "High-quality replacement batteries for your laptop",
    gradient: "from-yellow-500 to-orange-500"
  },
  { 
    icon: Smartphone, 
    label: "OS Installation", 
    desc: "Seamless OS installation for peak performance",
    gradient: "from-indigo-500 to-purple-500"
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert repair services for all your devices with cutting-edge technology and professional expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">{service.label}</h3>
                <p className="text-gray-600 text-center mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">{service.desc}</p>
                <div className="flex items-center justify-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
