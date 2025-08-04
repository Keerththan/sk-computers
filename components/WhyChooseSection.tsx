import { Card, CardContent } from "./ui/card"
import { DollarSign, Clock, Shield, Truck, CheckCircle, Star, Sparkles } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Our services are the most cost-effective in town.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: Clock,
    title: "Swift Solutions",
    description: "Experience the fastest service turnaround without compromising quality.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Shield,
    title: "Certified Expertise",
    description: "Trust our certified technicians for top-notch repairs.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: Truck,
    title: "On-the-Go Convenience",
    description: "We bring our expertise to you.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: CheckCircle,
    title: "Complimentary Assurance",
    description: "Benefit from free testing and diagnostics with every service.",
    gradient: "from-teal-500 to-blue-500",
    bgGradient: "from-teal-50 to-blue-50"
  },
  {
    icon: Star,
    title: "Professional Relationships",
    description: "Building lasting relationships with our customers through quality service.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50"
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">WHY CHOOSE US?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our commitment is to offer the fastest and most cost-effective repair service in Canada while building professional relationships with our customers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardContent className="p-8 relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-800 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
