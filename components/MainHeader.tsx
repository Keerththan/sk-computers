import { Search, Calendar, ChevronDown, Menu } from "lucide-react"
import { Button } from "./ui/button"

export default function MainHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-[#466384]">SK </span>
              <span className="text-gray-900">COMPUTERS</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#466384] font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-[#466384] font-medium transition-colors duration-300 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-[#466384] font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-[#466384] font-medium transition-colors duration-300 relative group">
              Downloads
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-[#466384] font-medium transition-colors duration-300 relative group">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-700 hover:text-[#466384] font-medium transition-colors duration-300 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost" className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group">
              <Search className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </Button>
            <Button className="bg-[#466384] hover:bg-[#2a3c51] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2 group">
              <Calendar className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span>Get a Quote</span>
            </Button>
            <Button size="sm" variant="ghost" className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group">
              <Menu className="w-5 h-5 group-hover:scale-110 transition-all duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
