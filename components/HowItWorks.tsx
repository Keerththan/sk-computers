const steps = [
  {
    step: "1",
    title: "Book Appointment",
    description: "Schedule your repair online or visit our store directly for immediate service",
  },
  {
    step: "2",
    title: "Free Diagnosis",
    description: "Our certified experts will diagnose the issue and provide a detailed quote",
  },
  {
    step: "3",
    title: "Professional Repair",
    description: "Skilled technicians repair your device using genuine parts and proper tools",
  },
  {
    step: "4",
    title: "Quality Check",
    description: "Thorough testing and quality assurance before returning your fully functional device",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#111118]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-[#a0a0a8]">Simple 4-step process to get your device repaired</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-20 h-20 bg-[#466384] text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:bg-[#5a7a9a] transition-colors duration-300"
              >
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-[#a0a0a8] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

