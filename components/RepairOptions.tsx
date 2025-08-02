import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CheckCircle, MapPin, Mail } from "lucide-react"

const repairOptions = [
  {
    icon: MapPin,
    title: "Visit Our Store",
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
    checkColor: "text-teal-600",
    features: ["Free diagnosis and quote", "Same-day repairs available", "Watch your device being repaired"],
    buttonText: "Find Store Location",
  },
  {
    icon: Mail,
    title: "Mail-In Service",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
    checkColor: "text-yellow-600",
    features: ["Free shipping both ways", "Secure packaging provided", "Real-time repair updates"],
    buttonText: "Start Mail-In Repair",
  },
]

export default function RepairOptions() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Repair Options</h2>
          <p className="text-xl text-gray-600">Choose the repair method that works best for you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {repairOptions.map((option, index) => (
            <Card key={index} className={`p-8 ${option.bgColor} ${option.borderColor}`}>
              <CardContent className="p-0">
                <div
                  className={`w-16 h-16 ${option.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <option.icon className={`w-8 h-8 ${option.iconColor}`} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{option.title}</h3>
                <ul className="space-y-4 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 ${option.checkColor} mr-3 flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${option.buttonColor}`}>{option.buttonText}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
