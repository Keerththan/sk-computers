import Image from "next/image"
import { Button } from "./ui/button"
import { Wrench, Calendar, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <span className="text-lg font-semibold text-yellow-600">Top Rated Computer Repair in Brampton</span>
              </div>
              
              <h1 className="text-5xl font-bold leading-tight">
                <span className="text-teal-600">Testing Free!</span>
                <br />
                <span className="text-black">No Fix! No Fees!</span>
                <br />
                <span className="text-black">We open 7 days a week</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Welcome to SK Computers, your premier destination in Brampton for expert laptop, computer, and MacBook repair and service. We pride ourselves on offering an unbeatable combination of affordability, premium quality, and lightning-fast service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Wrench className="w-5 h-5" />
                <span>Get a Quote</span>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <Image
                src="/images/Hero.jpg"
                alt="SK Computers - Professional computer and laptop repair services in Brampton"
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
