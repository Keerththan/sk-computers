import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"

interface PageHeroProps {
    title: string
    subtitle?: string
    badge?: string
    breadcrumbs?: { label: string; href: string }[]
}

export default function PageHero({ title, subtitle, badge, breadcrumbs }: PageHeroProps) {
    return (
        <section className="relative bg-[#0a0a0f] py-20 overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#111118] to-[#0a0a0f]"></div>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#466384]/5 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-2 text-sm mb-6">
                        <Link href="/" className="text-[#a0a0a8] hover:text-white transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" />
                            <span>Home</span>
                        </Link>
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-[#2a2a35]" />
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-white">{crumb.label}</span>
                                ) : (
                                    <Link href={crumb.href} className="text-[#a0a0a8] hover:text-white transition-colors">
                                        {crumb.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                )}

                {/* Badge */}
                {badge && (
                    <div className="inline-flex items-center gap-2 bg-[#1a1a24] border border-[#2a2a35] text-[#a0a0a8] px-4 py-2 rounded-full text-sm font-medium mb-6">
                        {badge}
                    </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {title}
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-xl text-[#a0a0a8] max-w-2xl">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
