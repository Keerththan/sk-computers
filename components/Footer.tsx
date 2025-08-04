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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              <span className="text-teal-400">SK</span>
              <span className="text-white">COMPUTERS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your premier destination in Brampton for expert laptop, computer, and MacBook repair and service. 
              We offer affordable excellence with lightning-fast service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 647 409 2045</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@skcomputers.ca</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>90, Kennedy South, Brampton, ON</span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">We open 7 days a week</span>
              </div>
              <div className="text-sm text-gray-500 ml-7">
                {businessHours.map((hours, index) => (
                  <div key={index}>{hours}</div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent p-2"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © SK COMPUTERS 2008 - 2024 | Your one-stop shop for affordable and efficient tech repairs.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
