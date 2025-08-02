const steps = [
  {
    step: "1",
    title: "Book Appointment",
    description: "Schedule your repair online or visit our store directly for immediate service",
    color: "bg-teal-600",
  },
  {
    step: "2",
    title: "Free Diagnosis",
    description: "Our certified experts will diagnose the issue and provide a detailed quote",
    color: "bg-blue-600",
  },
  {
    step: "3",
    title: "Professional Repair",
    description: "Skilled technicians repair your device using genuine parts and proper tools",
    color: "bg-green-600",
  },
  {
    step: "4",
    title: "Quality Check",
    description: "Thorough testing and quality assurance before returning your fully functional device",
    color: "bg-purple-600",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple 4-step process to get your device repaired</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
