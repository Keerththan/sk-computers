import TopHeader from "../../../components/TopHeader"
import MainHeader from "../../../components/MainHeader"
import Footer from "../../../components/Footer"
import LiveChat from "../../../components/LiveChat"
import PageHero from "../../../components/PageHero"
import WhyChooseSection from "../../../components/WhyChooseSection"
import CTASection from "../../../components/CTASection"
import { Award, Users, Clock, Wrench, Target, Heart, CheckCircle } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <TopHeader />
            <MainHeader />

            <PageHero
                title="About SK Computers"
                subtitle="Your trusted partner for computer repair services in Brampton since 2008"
                badge="Our Story"
                breadcrumbs={[{ label: "About Us", href: "/about" }]}
            />

            {/* About Content Section */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Story */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Welcome to SK Computers</h2>
                            <p className="text-[#a0a0a8] text-lg leading-relaxed">
                                Welcome to SK Computers, your premier destination in Brampton for expert laptop, computer,
                                and MacBook repair and service. We pride ourselves on offering an unbeatable combination
                                of affordability, premium quality, and lightning-fast service.
                            </p>
                            <p className="text-[#a0a0a8] text-lg leading-relaxed">
                                Since 2008, we have been dedicated to providing top-notch computer repair services to our
                                community. Our team of certified technicians brings over 16 years of experience to every
                                repair job, ensuring your devices are in the best hands possible.
                            </p>
                            <p className="text-[#a0a0a8] text-lg leading-relaxed">
                                We understand how important your devices are to your daily life, which is why we offer
                                free testing and diagnostics with every service. Our commitment to customer satisfaction
                                has earned us the trust of over 1000+ happy customers.
                            </p>
                        </div>

                        {/* Right Column - Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 text-center hover:border-[#466384]/50 transition-all duration-300">
                                <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">16+</div>
                                <div className="text-[#a0a0a8]">Years Experience</div>
                            </div>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 text-center hover:border-[#466384]/50 transition-all duration-300">
                                <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                                <div className="text-[#a0a0a8]">Happy Customers</div>
                            </div>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 text-center hover:border-[#466384]/50 transition-all duration-300">
                                <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Wrench className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">8+</div>
                                <div className="text-[#a0a0a8]">Services Offered</div>
                            </div>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 text-center hover:border-[#466384]/50 transition-all duration-300">
                                <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">7</div>
                                <div className="text-[#a0a0a8]">Days Open</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-[#111118]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] text-[#a0a0a8] px-4 py-2 rounded-full text-sm font-medium">
                            <Target className="w-4 h-4 text-[#5a7a9a]" />
                            Our Mission
                        </div>
                        <h2 className="text-4xl font-bold text-white">Delivering Excellence in Every Repair</h2>
                        <p className="text-xl text-[#a0a0a8] leading-relaxed">
                            Our mission is to provide affordable, high-quality computer repair services that our
                            customers can rely on. We believe in transparent pricing, honest diagnostics, and
                            delivering repairs that stand the test of time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-[#0a0a0f] border border-[#2a2a35] rounded-2xl p-8 hover:border-[#466384]/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Quality First</h3>
                            <p className="text-[#a0a0a8] leading-relaxed">
                                We use only genuine parts and proven repair techniques to ensure lasting results for every device we service.
                            </p>
                        </div>

                        <div className="bg-[#0a0a0f] border border-[#2a2a35] rounded-2xl p-8 hover:border-[#466384]/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mb-6">
                                <Heart className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Customer Care</h3>
                            <p className="text-[#a0a0a8] leading-relaxed">
                                Your satisfaction is our priority. We go above and beyond to ensure you're happy with our service.
                            </p>
                        </div>

                        <div className="bg-[#0a0a0f] border border-[#2a2a35] rounded-2xl p-8 hover:border-[#466384]/50 transition-all duration-300">
                            <div className="w-14 h-14 bg-[#466384] rounded-xl flex items-center justify-center mb-6">
                                <Award className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-4">Certified Experts</h3>
                            <p className="text-[#a0a0a8] leading-relaxed">
                                Our technicians are certified professionals with years of experience in all types of computer repairs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseSection />
            <CTASection />
            <Footer />
            <LiveChat />
        </div>
    )
}
