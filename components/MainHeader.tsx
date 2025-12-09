import { Search, Calendar, ChevronDown, Menu } from "lucide-react"
import { Button } from "./ui/button"

export default function MainHeader() {
  return (
    <header className="bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[#1a1a24] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-[#5a7a9a]">SK </span>
              <span className="text-white">COMPUTERS</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-[#a0a0a8] hover:text-white font-medium transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#a0a0a8] hover:text-white font-medium transition-colors duration-300 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#a0a0a8] hover:text-white font-medium transition-colors duration-300 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#a0a0a8] hover:text-white font-medium transition-colors duration-300 relative group">
              Downloads
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#a0a0a8] hover:text-white font-medium transition-colors duration-300 relative group">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-[#a0a0a8] hover:text-white font-medium transition-colors duration-300 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#466384] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" variant="ghost" className="p-2 text-[#a0a0a8] hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">
              <Search className="w-5 h-5" />
            </Button>
            <Button className="bg-[#466384] hover:bg-[#5a7a9a] text-white border-0 transition-all duration-300 flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Get a Quote</span>
            </Button>
            <Button size="sm" variant="ghost" className="lg:hidden p-2 text-[#a0a0a8] hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

