import { Card, CardContent } from "./ui/card"
import { Laptop, Monitor, Apple, Wrench, Battery, Shield, HardDrive, Smartphone } from "lucide-react"

const services = [
  { 
    icon: Laptop, 
    label: "Laptop Repair", 
    desc: "Broken Screen, Slow Laptop, Broken Hinges, Tune Up, Software & Hardware Upgrade, No Power On" 
  },
  { 
    icon: Monitor, 
    label: "Computer Repair", 
    desc: "Broken Screen, Slow Computer, Tune Up, Software & Hardware Upgrade, No Power On" 
  },
  { 
    icon: Apple, 
    label: "MacBook & iMac", 
    desc: "Broken Screen, OS Upgrade, Tune Up, Battery Replacement, Storage Upgrade" 
  },
  { 
    icon: Wrench, 
    label: "Chip Level Repair", 
    desc: "Precision and expertise with chip-level repair for comprehensive solutions" 
  },
  { 
    icon: HardDrive, 
    label: "Soft & Hardware Upgrade", 
    desc: "Stay up-to-date with the latest technology upgrades" 
  },
  { 
    icon: Shield, 
    label: "Virus Removal", 
    desc: "Your go-to for virus eviction and device optimization" 
  },
  { 
    icon: Battery, 
    label: "Battery Replacement", 
    desc: "High-quality replacement batteries for your laptop" 
  },
  { 
    icon: Smartphone, 
    label: "OS Installation", 
    desc: "Seamless OS installation for peak performance" 
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Expert repair services for all your devices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                  <service.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.label}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
