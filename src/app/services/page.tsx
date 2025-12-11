import TopHeader from "../../../components/TopHeader"
import MainHeader from "../../../components/MainHeader"
import Footer from "../../../components/Footer"
import LiveChat from "../../../components/LiveChat"
import PageHero from "../../../components/PageHero"
import CTASection from "../../../components/CTASection"
import HowItWorks from "../../../components/HowItWorks"
import { Card, CardContent } from "../../../components/ui/card"
import { ArrowRight, Monitor, Laptop, Apple, Cpu, HardDrive, Shield, Battery, Settings } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
    {
        image: "/images/LaptopRepair.jpg",
        icon: Laptop,
        label: "Laptop Repair",
        desc: "Broken Screen, Slow Laptop, Broken Hinges, Tune Up, Software & Hardware Upgrade, No Power On",
        details: [
            "Screen replacement & repair",
            "Keyboard & touchpad fixes",
            "Hinge repair & replacement",
            "Performance optimization",
            "Hardware upgrades (RAM, SSD)",
            "Power issues diagnosis"
        ]
    },
    {
        image: "/images/ComputerRepair.jpg",
        icon: Monitor,
        label: "Computer Repair",
        desc: "Broken Screen, Slow Computer, Tune Up, Software & Hardware Upgrade, No Power On",
        details: [
            "Desktop diagnostics",
            "Component replacement",
            "System cleanup & optimization",
            "Custom PC builds",
            "Network setup",
            "Data recovery"
        ]
    },
    {
        image: "/images/MacRepair.jpg",
        icon: Apple,
        label: "MacBook & iMac",
        desc: "Broken Screen, OS Upgrade, Tune Up, Battery Replacement, Storage Upgrade",
        details: [
            "macOS troubleshooting",
            "Screen replacement",
            "Battery service",
            "SSD upgrades",
            "Logic board repair",
            "Data migration"
        ]
    },
    {
        image: "/images/ChipReapir.jpg",
        icon: Cpu,
        label: "Chip Level Repair",
        desc: "Precision and expertise with chip-level repair for comprehensive solutions",
        details: [
            "Motherboard repair",
            "BGA rework",
            "Component soldering",
            "Circuit diagnostics",
            "Power circuit repair",
            "Advanced troubleshooting"
        ]
    },
    {
        image: "/images/SoftwareUpgrade.jpg",
        icon: Settings,
        label: "Software & Hardware Upgrade",
        desc: "Stay up-to-date with the latest technology upgrades",
        details: [
            "RAM upgrades",
            "SSD installation",
            "Graphics card upgrades",
            "Software installation",
            "Driver updates",
            "System optimization"
        ]
    },
    {
        image: "/images/VirusRemoval.jpg",
        icon: Shield,
        label: "Virus Removal",
        desc: "Your go-to for virus eviction and device optimization",
        details: [
            "Malware removal",
            "Spyware cleanup",
            "Ransomware recovery",
            "Security software setup",
            "Browser cleanup",
            "Prevention tips"
        ]
    },
    {
        image: "/images/BatteryReplacement.png",
        icon: Battery,
        label: "Battery Replacement",
        desc: "High-quality replacement batteries for your laptop",
        details: [
            "Battery diagnostics",
            "Genuine replacements",
            "Battery calibration",
            "Extended warranty",
            "Quick turnaround",
            "All laptop brands"
        ]
    },
    {
        image: "/images/OsInatalling.jpg",
        icon: HardDrive,
        label: "OS Installation",
        desc: "Seamless OS installation for peak performance",
        details: [
            "Windows installation",
            "macOS setup",
            "Linux installation",
            "Dual boot setup",
            "Data preservation",
            "Driver installation"
        ]
    },
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <TopHeader />
            <MainHeader />

            <PageHero
                title="Our Services"
                subtitle="Expert repair services for all your devices with cutting-edge technology and professional expertise"
                badge="What We Offer"
                breadcrumbs={[{ label: "Services", href: "/services" }]}
            />

            {/* Services Grid */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border border-[#2a2a35] hover:border-[#466384]/50 transition-all duration-500 bg-[#111118]"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Image */}
                                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                                        <Image
                                            src={service.image}
                                            alt={service.label}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 192px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111118]/80 md:block hidden"></div>
                                    </div>

                                    {/* Content */}
                                    <CardContent className="p-6 flex-grow">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center flex-shrink-0">
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-white mb-2">{service.label}</h3>
                                                <p className="text-[#a0a0a8] text-sm">{service.desc}</p>
                                            </div>
                                        </div>

                                        {/* Details List */}
                                        <ul className="grid grid-cols-2 gap-2 mb-4">
                                            {service.details.map((detail, i) => (
                                                <li key={i} className="text-[#a0a0a8] text-sm flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-[#466384] rounded-full"></div>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/contact"
                                            className="flex items-center text-[#5a7a9a] font-medium group-hover:text-white transition-colors"
                                        >
                                            <span>Get a Quote</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <HowItWorks />
            <CTASection />
            <Footer />
            <LiveChat />
        </div>
    )
}
