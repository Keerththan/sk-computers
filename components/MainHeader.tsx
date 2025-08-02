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
              <span className="text-black">Computer</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 cursor-pointer">
              <span>Repairs & Servicing</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Tech Wellness
            </a>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 cursor-pointer">
              <span>Business Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-teal-600 cursor-pointer">
              <span>Contact Us</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost" className="p-2">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Book Your Visit</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
