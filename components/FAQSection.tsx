"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How long does a typical laptop repair take?",
    answer:
      "Most standard repairs are completed within 24-48 hours. Complex component-level repairs may take 3-5 business days. We'll provide you with an accurate timeline after our free diagnosis.",
  },
  {
    question: "Do you offer warranty on repairs?",
    answer:
      "Yes, we provide a comprehensive 15-day warranty on all repairs and 90 days warranty on replacement parts. This covers both parts and labor for your peace of mind.",
  },
  {
    question: "Can you repair water-damaged laptops?",
    answer:
      "We specialize in liquid damage repair using advanced ultrasonic cleaning techniques and component replacement. The sooner you bring it in, the better the chances of recovery.",
  },
  {
    question: "Do you buy used laptops?",
    answer:
      "Yes, we purchase used laptops in good working condition. We offer competitive prices based on the model, age, and condition. Contact us for a free quote.",
  },
  {
    question: "What brands do you repair?",
    answer:
      "We repair all major laptop brands including Apple MacBook, Dell, HP, Lenovo, ASUS, Acer, MSI, Razer, and many more. Our technicians are trained on all popular models.",
  },
  {
    question: "Is data recovery included in repairs?",
    answer:
      "Basic data backup and recovery is included with most repairs. For complex data recovery from failed drives, additional charges may apply. We'll discuss this during diagnosis.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about our repair services</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0 rotate-180 transition-all duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 hover:text-teal-600 hover:scale-110 transition-all duration-300" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
