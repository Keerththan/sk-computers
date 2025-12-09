import { Card, CardContent } from "./ui/card"
import { Star, Quote, Heart } from "lucide-react"

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
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#466384]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] text-[#a0a0a8] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4 text-[#5a7a9a]" />
            Customer Love
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">Customer Reviews</h2>
          <p className="text-xl text-[#a0a0a8] max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group border border-[#2a2a35] hover:border-[#466384]/50 bg-[#111118] transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-[#a0a0a8] mb-8 leading-relaxed">"{testimonial.review}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#466384] text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-sm text-[#a0a0a8]">{testimonial.role}</div>
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

