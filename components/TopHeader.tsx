import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export default function TopHeader() {
  return (
    <div className="bg-gray-100 py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span>020 8543 7088</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="w-4 h-4" />
              <span>hello@fixfactor.co.uk</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span>Wimbledon</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700">
                <MapPin className="w-4 h-4" />
                <span>Oxford Street</span>
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
