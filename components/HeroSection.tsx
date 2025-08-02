import Image from "next/image"
import { Button } from "./ui/button"
import { Wrench, Calendar } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="text-teal-600">Expert Device Repair</span>
                <br />
                <span className="text-black">with Component-Level</span>
                <br />
                <span className="text-black">Precision</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Component-level repairs that Apple won't do. Motherboard microsolder specialists fixing devices others
                write off. Plus everyday phone and laptop repairs done right – with genuine parts, proper tools, and
                technicians who actually care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Wrench className="w-5 h-5" />
                <span>Start Your Repair</span>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/images/hero-repair-detailed.png"
                alt="Component-level laptop repair with precision tools"
                width={700}
                height={500}
                className="w-full h-auto rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
