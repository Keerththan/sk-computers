import { Card, CardContent } from "./ui/card"
import { DollarSign, Clock, Shield, Truck, CheckCircle, Star } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description: "Our services are the most cost-effective in town.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Swift Solutions",
    description: "Experience the fastest service turnaround without compromising quality.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "Certified Expertise",
    description: "Trust our certified technicians for top-notch repairs.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Truck,
    title: "On-the-Go Convenience",
    description: "We bring our expertise to you.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CheckCircle,
    title: "Complimentary Assurance",
    description: "Benefit from free testing and diagnostics with every service.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Star,
    title: "Professional Relationships",
    description: "Building lasting relationships with our customers through quality service.",
    color: "bg-yellow-100 text-yellow-600",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US?</h2>
          <p className="text-xl text-gray-600">Our commitment is to offer the fastest and most cost-effective repair service in Canada while building professional relationships with our customers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div
                  className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
