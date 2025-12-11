import TopHeader from "../../../components/TopHeader"
import MainHeader from "../../../components/MainHeader"
import Footer from "../../../components/Footer"
import LiveChat from "../../../components/LiveChat"
import PageHero from "../../../components/PageHero"
import CTASection from "../../../components/CTASection"
import { Card, CardContent } from "../../../components/ui/card"
import { Star, Quote, ExternalLink } from "lucide-react"
import { Button } from "../../../components/ui/button"

const testimonials = [
    {
        name: "James Carvey",
        role: "Customer",
        rating: 5,
        review: "The Quality of service is impeccable. The staff is both knowledgeable and helpful. I have been using the services for six years now and it has been a trouble free and rewarding experience. We need more branches of SK computers in more GTA areas in order to make their services accessible to all computer users- both for professional and personal usage. THANK YOU SK",
        avatar: "JC",
    },
    {
        name: "Ramesh Desai",
        role: "Customer",
        rating: 5,
        review: "Wonderful experience!!! I had issue with laptop screen. I spoke to Suthan and explained situation that i can come after six pm from my work by the time he closes shop. Also, since laptop is used for university, i required it back same day. I reached his shop after 6:30, he still waited. Not only that he fixed my laptop staying longer time and gave it back on same day. Very helpful and very customer friendly experience 👏👏",
        avatar: "RD",
    },
    {
        name: "Shayini Mathan",
        role: "Customer",
        rating: 5,
        review: "Excellent service for a very reasonable price. The man gave me a free assessment and the estimate. He completed the work (fix) in just a few days. He had saved me the cost of buying another laptop. When I mentioned it to another coworker and she told me that she goes to this place for all her tech issues, and she is also very happy with the service.",
        avatar: "SM",
    },
    {
        name: "Priya Sharma",
        role: "Customer",
        rating: 5,
        review: "Best computer repair shop in Brampton! They fixed my MacBook Pro when other shops said it couldn't be repaired. The pricing was very fair and the turnaround time was impressive. Highly recommend SK Computers for any laptop or computer issues.",
        avatar: "PS",
    },
    {
        name: "Michael Chen",
        role: "Business Owner",
        rating: 5,
        review: "As a small business owner, I rely on SK Computers for all my IT needs. They've helped me set up my office network, repair employee laptops, and provide ongoing support. Their expertise and reliability have been invaluable to my business operations.",
        avatar: "MC",
    },
    {
        name: "Sarah Thompson",
        role: "Customer",
        rating: 5,
        review: "I brought in my old laptop that was running extremely slow. The team at SK Computers diagnosed the issue quickly and recommended an SSD upgrade. The difference is like night and day! My laptop runs like new again. Thank you for the excellent service!",
        avatar: "ST",
    },
]

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <TopHeader />
            <MainHeader />

            <PageHero
                title="Customer Reviews"
                subtitle="Don't just take our word for it - hear from our satisfied customers"
                badge="Testimonials"
                breadcrumbs={[{ label: "Reviews", href: "/reviews" }]}
            />

            {/* Reviews Stats */}
            <section className="py-12 bg-[#111118]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">5.0</div>
                            <div className="text-[#a0a0a8]">Average Rating</div>
                        </div>
                        <div className="text-center px-8 border-x border-[#2a2a35]">
                            <div className="text-3xl font-bold text-white mb-1">1000+</div>
                            <div className="text-[#a0a0a8]">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">16+</div>
                            <div className="text-[#a0a0a8]">Years in Business</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="group border border-[#2a2a35] hover:border-[#466384]/50 bg-[#111118] transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 bg-[#466384] rounded-lg flex items-center justify-center mb-4">
                                        <Quote className="w-5 h-5 text-white" />
                                    </div>

                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-[#a0a0a8] mb-6 leading-relaxed text-sm">"{testimonial.review}"</p>

                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-[#466384] text-white rounded-lg flex items-center justify-center font-bold mr-3">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-white">{testimonial.name}</div>
                                            <div className="text-sm text-[#a0a0a8]">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Google Reviews Link */}
                    <div className="mt-16 text-center">
                        <a
                            href="https://www.google.com/search?q=sk+computers+brampton+reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-[#466384] hover:bg-[#5a7a9a] text-white px-8 py-6 text-lg font-medium transition-all duration-300 flex items-center gap-3 mx-auto">
                                <span>See More Reviews on Google</span>
                                <ExternalLink className="w-5 h-5" />
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
            <LiveChat />
        </div>
    )
}
