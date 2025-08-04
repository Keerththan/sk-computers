import { Search, Calendar, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"

export default function MainHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-teal-600">SK </span>
              <span className="text-black">COMPUTERS</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Downloads
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Reviews
            </a>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost" className="p-2">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="bg-teal-600 text-white hover:bg-teal-700 flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Get a Quote</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
