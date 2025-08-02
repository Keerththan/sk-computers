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
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Live Chat!</span>
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 h-96 border">
          <div className="bg-teal-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-teal-700 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 h-80 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>How can we help you today?</p>
              <Button className="mt-4 bg-teal-600 hover:bg-teal-700">Start Conversation</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
