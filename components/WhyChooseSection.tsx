import { Card, CardContent } from "./ui/card"
import { CheckCircle, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "15 Days Quality Guarantee",
    description: "We provide 15 days warranty on all repairs with genuine parts and professional service.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "24/7 Customer Service",
    description: "Round-the-clock customer support to assist you with any queries or concerns.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "No Hidden Charges",
    description: "Transparent pricing with no hidden fees. You pay exactly what we quote.",
    color: "bg-purple-100 text-purple-600",
  },
]

export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fixfactor?</h2>
          <p className="text-xl text-gray-600">Experience the difference with our professional service</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
