"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { MessageCircle, X } from "lucide-react"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-[#466384] hover:bg-[#5a7a9a] text-white rounded-full p-4 transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Live Chat!</span>
        </Button>
      )}

      {isOpen && (
        <div className="bg-[#111118] rounded-xl border border-[#2a2a35] w-80 h-96 overflow-hidden">
          <div className="bg-[#466384] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 h-80 flex items-center justify-center text-[#a0a0a8]">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#2a2a35]" />
              <p>How can we help you today?</p>
              <Button className="mt-4 bg-[#466384] hover:bg-[#5a7a9a] text-white">Start Conversation</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

