import { Button } from "./ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from "lucide-react"

const footerSections = {
  services: [
    "Laptop Repair",
    "Computer Repair",
    "MacBook & iMac Repair",
    "Chip Level Repair",
    "Virus Removal",
    "Battery Replacement",
    "OS Installation",
    "Hardware Upgrades",
  ],
  company: ["About Us", "Our Services", "Contact Us", "Reviews", "Downloads", "Get a Quote"],
  support: ["Help Centre", "FAQ", "Contact Us", "Repair Status", "Warranty Info", "Returns"],
}

const businessHours = [
  "Monday: 10 am - 6.30 pm",
  "Tuesday: 10 am - 6.30 pm",
  "Wednesday: 10 am - 6.30 pm",
  "Thursday: 10 am - 6.30 pm",
  "Friday: 10 am - 6.30 pm",
  "Saturday: 10 am - 6.30 pm",
  "Sunday: 10 am - 3.00 pm",
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] text-white border-t border-[#1a1a24]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              <span className="text-[#5a7a9a]">SK</span>
              <span className="text-white">COMPUTERS</span>
            </div>
            <p className="text-[#a0a0a8] leading-relaxed">
              Your premier destination in Brampton for expert laptop, computer, and MacBook repair and service.
              We offer affordable excellence with lightning-fast service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#a0a0a8] hover:text-white transition-colors group">
                <Phone className="w-4 h-4" />
                <span>+1 647 409 2045</span>
              </div>
              <div className="flex items-center space-x-3 text-[#a0a0a8] hover:text-white transition-colors group">
                <Mail className="w-4 h-4" />
                <span>info@skcomputers.ca</span>
              </div>
              <div className="flex items-center space-x-3 text-[#a0a0a8] hover:text-white transition-colors group">
                <MapPin className="w-4 h-4" />
                <span>90, Kennedy South, Brampton, ON</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-[#a0a0a8]">
                <Clock className="w-4 h-4" />
                <span className="font-semibold text-white">We open 7 days a week</span>
              </div>
              <div className="text-sm text-[#a0a0a8]/70 ml-7">
                {businessHours.map((hours, index) => (
                  <div key={index}>{hours}</div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="border-[#2a2a35] text-[#a0a0a8] hover:text-white hover:border-[#466384] hover:bg-[#1a1a24] bg-transparent p-2 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#2a2a35] text-[#a0a0a8] hover:text-white hover:border-[#466384] hover:bg-[#1a1a24] bg-transparent p-2 transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#2a2a35] text-[#a0a0a8] hover:text-white hover:border-[#466384] hover:bg-[#1a1a24] bg-transparent p-2 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-[#2a2a35] text-[#a0a0a8] hover:text-white hover:border-[#466384] hover:bg-[#1a1a24] bg-transparent p-2 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-[#a0a0a8] hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-[#a0a0a8] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-[#a0a0a8] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1a24] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#a0a0a8]">
              © SK COMPUTERS 2008 - 2024 | Your one-stop shop for affordable and efficient tech repairs.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#a0a0a8] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#a0a0a8] hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#a0a0a8] hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

