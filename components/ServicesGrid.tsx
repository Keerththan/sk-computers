import { Card, CardContent } from "./ui/card"
import { Smartphone, Laptop, Tablet, Gamepad2, Headphones, Camera, Watch, Monitor } from "lucide-react"

const services = [
  { icon: Smartphone, label: "Mobile Phones", desc: "iPhone & Android Repair" },
  { icon: Laptop, label: "Laptops", desc: "All Brands & Models" },
  { icon: Tablet, label: "Tablets", desc: "iPad & Android Tablets" },
  { icon: Gamepad2, label: "Gaming", desc: "Consoles & Handhelds" },
  { icon: Headphones, label: "Audio Devices", desc: "Headphones & Speakers" },
  { icon: Camera, label: "Cameras", desc: "Digital & DSLR Cameras" },
  { icon: Watch, label: "Smartwatches", desc: "Apple Watch & More" },
  { icon: Monitor, label: "Monitors", desc: "LCD & LED Displays" },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Can We Fix For You?</h2>
          <p className="text-xl text-gray-600">Expert repair services for all your devices</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
