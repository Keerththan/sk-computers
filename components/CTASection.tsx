import { Button } from "../components/ui/button"
import { PhoneCall, Calendar, MessageCircle, Clock } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Contact us today for a free diagnosis and quote. Our expert technicians are ready to help restore your
            device to perfect working condition. Testing Free! No Fix! No Fees!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <PhoneCall className="w-5 h-5 mr-3" />
              Call Now: +1 647 409 2045
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 bg-transparent px-8 py-4 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Get a Quote
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 bg-transparent px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Contact Us
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">7 Days</div>
              <div className="opacity-90">We Open Every Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="opacity-90">Testing & Diagnostics</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Fast</div>
              <div className="opacity-90">Service Turnaround</div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-80">
            <Clock className="w-4 h-4" />
            <span>Monday-Saturday: 10 am - 6.30 pm | Sunday: 10 am - 3.00 pm</span>
          </div>
        </div>
      </div>
    </section>
  )
}
