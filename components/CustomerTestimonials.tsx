import { Card, CardContent } from "./ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    rating: 5,
    review:
      "Excellent service! My laptop was repaired quickly and works perfectly now. The staff was very professional and kept me updated throughout the process. Highly recommend!",
    avatar: "SJ",
  },
  {
    name: "Mike Chen",
    role: "Software Developer",
    rating: 5,
    review:
      "Great experience with Fixfactor. They fixed my gaming laptop's overheating issue and it runs like new. The component-level repair expertise is impressive!",
    avatar: "MC",
  },
  {
    name: "Emma Wilson",
    role: "Graphic Designer",
    rating: 5,
    review:
      "Professional and reliable service. They repaired my MacBook screen and it looks perfect. Fair pricing and excellent customer service throughout.",
    avatar: "EW",
  },
]

export default function CustomerTestimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 relative">
              <CardContent className="p-0">
                <Quote className="w-8 h-8 text-teal-600 mb-4 opacity-50" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.review}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
