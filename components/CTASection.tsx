import { Button } from "../components/ui/button"
import { PhoneCall, Calendar, MessageCircle, Clock, ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#466384]/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] text-[#a0a0a8] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#5a7a9a]" />
            Get Started Today
          </div>

          <h2 className="text-5xl font-bold mb-8 text-white">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-10 text-[#a0a0a8] leading-relaxed max-w-3xl mx-auto">
            Contact us today for a free diagnosis and quote. Our expert technicians are ready to help restore your
            device to perfect working condition. Testing Free! No Fix! No Fees!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-[#466384] hover:bg-[#5a7a9a] text-white px-8 py-4 text-lg font-medium transition-all duration-300 group"
            >
              <PhoneCall className="w-5 h-5 mr-3" />
              Call Now: +1 647 409 2045
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-[#2a2a35] text-[#a0a0a8] hover:bg-[#1a1a24] hover:text-white hover:border-[#466384] bg-transparent px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Get a Quote
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border border-[#2a2a35] text-[#a0a0a8] hover:bg-[#1a1a24] hover:text-white hover:border-[#466384] bg-transparent px-8 py-4 text-lg font-medium transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-white">7 Days</div>
              <div className="text-[#a0a0a8]">We Open Every Week</div>
            </div>
            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-white">Free</div>
              <div className="text-[#a0a0a8]">Testing & Diagnostics</div>
            </div>
            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
              <div className="text-3xl font-bold mb-2 text-white">Fast</div>
              <div className="text-[#a0a0a8]">Service Turnaround</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-[#a0a0a8] bg-[#111118] border border-[#2a2a35] rounded-full px-6 py-3 inline-flex">
            <Clock className="w-4 h-4" />
            <span>Monday-Saturday: 10 am - 6.30 pm | Sunday: 10 am - 3.00 pm</span>
          </div>
        </div>
      </div>
    </section>
  )
}

