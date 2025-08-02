import { Button } from "./ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const footerSections = {
  services: [
    "Laptop Repair",
    "Screen Replacement",
    "Data Recovery",
    "Used Laptops",
    "Virus Removal",
    "Hardware Upgrades",
  ],
  company: ["About Us", "Our Team", "Careers", "Blog", "Contact", "Reviews"],
  support: ["Help Center", "Repair Status", "Warranty Info", "Shipping Info", "Returns", "FAQ"],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-3xl font-bold">
              <span className="text-teal-400">fix</span>
              <span className="text-white">factor</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional laptop repair services and used laptop sales with expert technicians, genuine parts, and
              component-level precision repairs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>020 8543 7088</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@fixfactor.co.uk</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Oxford Street & Wimbledon</span>
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
              © 2024 Fixfactor. All rights reserved. | Professional laptop repair services in London.
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
