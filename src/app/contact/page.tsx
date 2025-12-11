"use client"

import { useState } from "react"
import TopHeader from "../../../components/TopHeader"
import MainHeader from "../../../components/MainHeader"
import Footer from "../../../components/Footer"
import LiveChat from "../../../components/LiveChat"
import PageHero from "../../../components/PageHero"
import { Button } from "../../../components/ui/button"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, this would send the form data to a backend
        setIsSubmitted(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <TopHeader />
            <MainHeader />

            <PageHero
                title="Contact Us"
                subtitle="Have questions or need assistance? We're here to help!"
                badge="Get in Touch"
                breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
            />

            <section className="py-20 bg-[#0a0a0f]">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                                        <a href="tel:+16474092045" className="text-[#a0a0a8] hover:text-white transition-colors">
                                            +1 647 409 2045
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Email</h3>
                                        <a href="mailto:info@skcomputers.ca" className="text-[#a0a0a8] hover:text-white transition-colors">
                                            info@skcomputers.ca
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">Address</h3>
                                        <p className="text-[#a0a0a8]">90, Kennedy South<br />Brampton, ON</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 hover:border-[#466384]/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-2">Business Hours</h3>
                                        <div className="text-[#a0a0a8] text-sm space-y-1">
                                            <p>Monday - Saturday: 10:00 AM - 6:30 PM</p>
                                            <p>Sunday: 10:00 AM - 3:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                                {isSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                                        <p className="text-[#a0a0a8]">Thank you for contacting us. We'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white mb-2 font-medium">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-[#0a0a0f] border border-[#2a2a35] rounded-xl px-4 py-3 text-white placeholder-[#a0a0a8]/50 focus:outline-none focus:border-[#466384] transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white mb-2 font-medium">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-[#0a0a0f] border border-[#2a2a35] rounded-xl px-4 py-3 text-white placeholder-[#a0a0a8]/50 focus:outline-none focus:border-[#466384] transition-colors"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-white mb-2 font-medium">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    className="w-full bg-[#0a0a0f] border border-[#2a2a35] rounded-xl px-4 py-3 text-white placeholder-[#a0a0a8]/50 focus:outline-none focus:border-[#466384] transition-colors"
                                                    placeholder="+1 (___) ___-____"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-white mb-2 font-medium">Subject *</label>
                                                <select
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-[#0a0a0f] border border-[#2a2a35] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#466384] transition-colors"
                                                >
                                                    <option value="">Select a subject</option>
                                                    <option value="laptop-repair">Laptop Repair</option>
                                                    <option value="computer-repair">Computer Repair</option>
                                                    <option value="mac-repair">MacBook / iMac Repair</option>
                                                    <option value="virus-removal">Virus Removal</option>
                                                    <option value="quote">Get a Quote</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-white mb-2 font-medium">Message *</label>
                                            <textarea
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full bg-[#0a0a0f] border border-[#2a2a35] rounded-xl px-4 py-3 text-white placeholder-[#a0a0a8]/50 focus:outline-none focus:border-[#466384] transition-colors resize-none"
                                                placeholder="Describe your issue or inquiry..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-[#466384] hover:bg-[#5a7a9a] text-white py-6 text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-12">
                        <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d-79.7604!3d43.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQwJzQ4LjAiTiA3OcKwNDUnMzcuNCJX!5e0!3m2!1sen!2sca!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale contrast-125 invert"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <LiveChat />
        </div>
    )
}
