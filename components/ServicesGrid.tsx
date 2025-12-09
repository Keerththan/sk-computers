import { Card, CardContent } from "./ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const services = [
  { 
    image: "/images/LaptopRepair.jpg", 
    label: "Laptop Repair", 
    desc: "Broken Screen, Slow Laptop, Broken Hinges, Tune Up, Software & Hardware Upgrade, No Power On",
    color: "blue-500"
  },
  { 
    image: "/images/ComputerRepair.jpg", 
    label: "Computer Repair", 
    desc: "Broken Screen, Slow Computer, Tune Up, Software & Hardware Upgrade, No Power On",
    color: "purple-500"
  },
  { 
    image: "/images/MacRepair.jpg", 
    label: "MacBook & iMac", 
    desc: "Broken Screen, OS Upgrade, Tune Up, Battery Replacement, Storage Upgrade",
    color: "gray-600"
  },
  { 
    image: "/images/ChipReapir.jpg", 
    label: "Chip Level Repair", 
    desc: "Precision and expertise with chip-level repair for comprehensive solutions",
    color: "orange-500"
  },
  { 
    image: "/images/SoftwareUpgrade.jpg", 
    label: "Soft & Hardware Upgrade", 
    desc: "Stay up-to-date with the latest technology upgrades",
    color: "green-500"
  },
  { 
    image: "/images/VirusRemoval.jpg", 
    label: "Virus Removal", 
    desc: "Your go-to for virus eviction and device optimization",
    color: "teal-500"
  },
  { 
    image: "/images/BatteryReplacement.png", 
    label: "Battery Replacement", 
    desc: "High-quality replacement batteries for your laptop",
    color: "yellow-500"
  },
  { 
    image: "/images/OsInatalling.jpg", 
    label: "OS Installation", 
    desc: "Seamless OS installation for peak performance",
    color: "indigo-500"
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#466384] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Expertise
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert repair services for all your devices with cutting-edge technology and professional expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gray-200 h-80"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image 
                  src={service.image} 
                  alt={service.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index < 4} // Prioritize first 4 images
                  quality={75} // Optimize quality for faster loading
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              </div>
              
              <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
                <h3 className="font-bold text-xl mb-4 text-center group-hover:text-white transition-colors">{service.label}</h3>
                <p className="text-white/90 text-center mb-6 leading-relaxed text-sm group-hover:text-white transition-colors">{service.desc}</p>
                <div className="flex items-center justify-center text-white font-semibold group-hover:text-yellow-300 transition-colors">
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
