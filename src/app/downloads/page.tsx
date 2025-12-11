import TopHeader from "../../../components/TopHeader"
import MainHeader from "../../../components/MainHeader"
import Footer from "../../../components/Footer"
import LiveChat from "../../../components/LiveChat"
import PageHero from "../../../components/PageHero"
import { Download, Monitor, ExternalLink, Shield, Headphones } from "lucide-react"
import { Button } from "../../../components/ui/button"
import Image from "next/image"

const downloads = [
    {
        name: "TeamViewer",
        description: "Remote desktop access and support software. Our technicians use TeamViewer to provide quick remote assistance for software issues.",
        icon: "/images/teamviewer-logo.png",
        downloadUrl: "https://www.teamviewer.com/en/download/windows/",
        platform: "Windows",
        size: "~25 MB",
        features: [
            "Remote desktop control",
            "File transfer capability",
            "Secure encrypted connection",
            "Easy to use interface"
        ]
    },
    {
        name: "AnyDesk",
        description: "Fast remote desktop application. AnyDesk provides smooth remote support with low latency for efficient troubleshooting.",
        icon: "/images/anydesk-logo.png",
        downloadUrl: "https://anydesk.com/en/downloads/windows",
        platform: "Windows",
        size: "~5 MB",
        features: [
            "Lightweight application",
            "Low latency connection",
            "Banking-level security",
            "Cross-platform support"
        ]
    }
]

export default function DownloadsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            <TopHeader />
            <MainHeader />

            <PageHero
                title="Downloads"
                subtitle="Download remote support tools to allow our technicians to assist you remotely"
                badge="Remote Support Tools"
                breadcrumbs={[{ label: "Downloads", href: "/downloads" }]}
            />

            {/* Downloads Section */}
            <section className="py-20 bg-[#0a0a0f]">
                <div className="container mx-auto px-4">
                    {/* Info Banner */}
                    <div className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-6 mb-12 flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#466384] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Headphones className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Need Remote Support?</h3>
                            <p className="text-[#a0a0a8]">
                                Download one of the tools below and call us at <span className="text-white font-medium">+1 647 409 2045</span>.
                                Our technicians will guide you through the remote support process and help resolve your computer issues quickly.
                            </p>
                        </div>
                    </div>

                    {/* Download Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {downloads.map((tool, index) => (
                            <div
                                key={index}
                                className="bg-[#111118] border border-[#2a2a35] rounded-2xl p-8 hover:border-[#466384]/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-16 h-16 bg-[#1a1a24] rounded-xl flex items-center justify-center">
                                        <Monitor className="w-8 h-8 text-[#5a7a9a]" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{tool.name}</h3>
                                        <div className="flex items-center gap-3 text-sm text-[#a0a0a8]">
                                            <span>{tool.platform}</span>
                                            <span className="w-1 h-1 bg-[#2a2a35] rounded-full"></span>
                                            <span>{tool.size}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[#a0a0a8] mb-6 leading-relaxed">
                                    {tool.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-8">
                                    {tool.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#a0a0a8]">
                                            <Shield className="w-4 h-4 text-[#5a7a9a]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full bg-[#466384] hover:bg-[#5a7a9a] text-white py-6 text-lg font-medium transition-all duration-300 flex items-center justify-center gap-3">
                                        <Download className="w-5 h-5" />
                                        Download {tool.name}
                                        <ExternalLink className="w-4 h-4" />
                                    </Button>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <div className="mt-16 bg-[#111118] border border-[#2a2a35] rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6">How to Use Remote Support</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#466384] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    1
                                </div>
                                <h4 className="font-semibold text-white mb-2">Download</h4>
                                <p className="text-[#a0a0a8] text-sm">Download TeamViewer or AnyDesk from above</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#466384] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    2
                                </div>
                                <h4 className="font-semibold text-white mb-2">Install & Run</h4>
                                <p className="text-[#a0a0a8] text-sm">Run the application on your computer</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#466384] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    3
                                </div>
                                <h4 className="font-semibold text-white mb-2">Call Us</h4>
                                <p className="text-[#a0a0a8] text-sm">Call +1 647 409 2045 and share your ID</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-[#466384] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                                    4
                                </div>
                                <h4 className="font-semibold text-white mb-2">Get Support</h4>
                                <p className="text-[#a0a0a8] text-sm">Our technician will connect and help you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <LiveChat />
        </div>
    )
}
