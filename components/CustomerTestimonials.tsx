import { Card, CardContent } from "./ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "James Carvey",
    role: "Customer",
    rating: 5,
    review:
      "The Quality of service is impeccable. The staff is both knowledgeable and helpful. I have been using the services for six years now and it has been a trouble free and rewarding experience. We need more branches of SK computers in more GTA areas in order to make their services accessible to all computer users- both for professional and personal usage. THANK YOU SK",
    avatar: "JC",
  },
  {
    name: "Ramesh Desai",
    role: "Customer",
    rating: 5,
    review:
      "Wonderful experience!!! I had issue with laptop screen. I spoke to Suthan and explained situation that i can come after six pm from my work by the time he closes shop. Also, since laptop is used for university, i required it back same day. I reached his shop after 6:30, he still waited. Not only that he fixed my laptop staying longer time and gave it back on same day. Very helpful and very customer friendly experience 👏👏",
    avatar: "RD",
  },
  {
    name: "Shayini Mathan",
    role: "Customer",
    rating: 5,
    review:
      "Excellent service for a very reasonable price. The man gave me a free assessment and the estimate. He completed the work (fix) in just a few days. He had saved me the cost of buying another laptop. When I mentioned it to another coworker and she told me that she goes to this place for all her tech issues, and she is also very happy with the service.",
    avatar: "SM",
  },
]

export default function CustomerTestimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
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
