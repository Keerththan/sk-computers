import Image from "next/image"
import { Button } from "./ui/button"
import { Wrench, Calendar, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              <span>Top Rated Computer Repair in Brampton</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Testing Free!
                </span>
                <br />
                <span className="text-gray-900">No Fix! No Fees!</span>
                <br />
                <span className="text-gray-700 text-4xl">We open 7 days a week</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Welcome to SK Computers, your premier destination in Brampton for expert laptop, computer, and MacBook repair and service. We pride ourselves on offering an unbeatable combination of affordability, premium quality, and lightning-fast service.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Warranty Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Wrench className="w-5 h-5" />
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-4 text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              <Image
                src="/images/Hero.jpg"
                alt="SK Computers - Professional computer and laptop repair services in Brampton"
                width={700}
                height={500}
                className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="text-2xl font-bold text-gray-900">16+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
