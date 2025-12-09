import Image from "next/image"
import { Button } from "./ui/button"
import { Wrench, Calendar, Star, ArrowRight, CheckCircle, Zap, Clock, Award } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-[#0a0a0f] py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#466384]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center min-h-[600px]">
          <div className="space-y-8 lg:pr-8">
            {/* Badge - more subtle */}
            <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] text-[#a0a0a8] px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 text-[#5a7a9a]" />
              <span>Top Rated Computer Repair in Brampton</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-[#5a7a9a]">
                  Testing Free!
                </span>
                <br />
                <span className="text-white">No Fix! No Fees!</span>
                <br />
                <span className="text-[#a0a0a8] text-3xl xl:text-4xl">We open 7 days a week</span>
              </h1>

              <p className="text-xl text-[#a0a0a8] leading-relaxed max-w-lg">
                Welcome to SK Computers, your premier destination in Brampton for expert laptop, computer, and MacBook repair and service. We pride ourselves on offering an unbeatable combination of affordability, premium quality, and lightning-fast service.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#a0a0a8] group">
                <CheckCircle className="w-4 h-4 text-[#5a7a9a]" />
                <span>Free Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#a0a0a8] group">
                <Zap className="w-4 h-4 text-[#5a7a9a]" />
                <span>Same Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#a0a0a8] group">
                <Award className="w-4 h-4 text-[#5a7a9a]" />
                <span>Warranty Included</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#466384] hover:bg-[#5a7a9a] text-white px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 group"
              >
                <Wrench className="w-5 h-5" />
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                className="bg-transparent border border-[#2a2a35] text-[#a0a0a8] hover:bg-[#1a1a24] hover:text-white hover:border-[#466384] px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                <span>Learn More</span>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[32rem] h-[32rem] lg:w-[38rem] lg:h-[38rem] xl:w-[44rem] xl:h-[44rem]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#2a2a35]">
                <Image
                  src="/images/Hero.jpg"
                  alt="SK Computers - Professional computer and laptop repair services in Brampton"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 512px, (max-width: 1024px) 608px, 704px"
                />
                {/* Dark overlay for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent"></div>
              </div>

              {/* Floating stats - dark theme */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-[#111118] border border-[#2a2a35] rounded-2xl p-4 z-10">
                <div className="text-2xl font-bold text-white">16+</div>
                <div className="text-sm text-[#a0a0a8]">Years Experience</div>
              </div>

              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-[#466384] rounded-2xl p-4 z-10">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm text-white/80">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

