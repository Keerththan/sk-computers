import { Button } from "../components/ui/button"
import { PhoneCall, Calendar, MessageCircle, Clock, ArrowRight, Sparkles, Headphones, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0f161d] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[#2a3c51]/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Get Started Today
          </div>
          
          <h2 className="text-6xl font-bold mb-8">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Contact us today for a free diagnosis and quote. Our expert technicians are ready to help restore your
            device to perfect working condition. Testing Free! No Fix! No Fees!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-[#466384] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <PhoneCall className="w-5 h-5 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              Call Now: +1 647 409 2045
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#466384] bg-transparent px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#466384] bg-transparent px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <MessageCircle className="w-5 h-5 mr-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">7 Days</div>
              <div className="opacity-90">We Open Every Week</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">Free</div>
              <div className="opacity-90">Testing & Diagnostics</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl font-bold mb-2">Fast</div>
              <div className="opacity-90">Service Turnaround</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm opacity-80 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>Monday-Saturday: 10 am - 6.30 pm | Sunday: 10 am - 3.00 pm</span>
          </div>
        </div>
      </div>
    </section>
  )
}
