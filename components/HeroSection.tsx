import Image from "next/image"
import { Button } from "./ui/button"
import { Wrench, Calendar, Star, ArrowRight, CheckCircle, Zap, Clock, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-slate-50 py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[#466384]/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2a3c51]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#466384]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center min-h-[600px]">
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Award className="w-4 h-4 fill-current" />
              <span>Top Rated Computer Repair in Brampton</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-[#466384]">
                  Testing Free!
                </span>
                <br />
                <span className="text-gray-900">No Fix! No Fees!</span>
                <br />
                <span className="text-gray-700 text-3xl xl:text-4xl">We open 7 days a week</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Welcome to SK Computers, your premier destination in Brampton for expert laptop, computer, and MacBook repair and service. We pride ourselves on offering an unbeatable combination of affordability, premium quality, and lightning-fast service.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 group">
                <CheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                <span>Free Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 group">
                <Zap className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 group">
                <Award className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
                <span>Warranty Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#466384] hover:bg-[#2a3c51] text-white px-8 py-4 text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#466384] px-8 py-4 text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[32rem] h-[32rem] lg:w-[38rem] lg:h-[38rem] xl:w-[44rem] xl:h-[44rem]">
              <div className="absolute inset-0 bg-[#466384]/20 rounded-2xl blur-xl transform translate-x-2 translate-y-2"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="/images/Hero.jpg"
                  alt="SK Computers - Professional computer and laptop repair services in Brampton"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 512px, (max-width: 1024px) 608px, 704px"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-10">
                <div className="text-2xl font-bold text-gray-900">16+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-[#466384] text-white rounded-2xl p-4 shadow-xl z-10">
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
