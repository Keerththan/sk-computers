import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from "lucide-react"
import { Button } from "./ui/button"

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-3 text-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+1 647 409 2045</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300">
              <Mail className="w-4 h-4" />
              <span className="font-medium">info@skcomputers.ca</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">90, Kennedy South, Brampton, ON</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-300">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Open 7 Days a Week</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
