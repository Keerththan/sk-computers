import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from "lucide-react"
import { Button } from "./ui/button"

export default function TopHeader() {
  return (
    <div className="bg-gray-100 py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>+1 647 409 2045</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-4 h-4" />
              <span>info@skcomputers.ca</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span>90, Kennedy South, Brampton, ON</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700">
                <Clock className="w-4 h-4" />
                <span>Open 7 Days a Week</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-1 h-8 w-8">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
