const statistics = [
  { number: "16+", label: "Years Experience", color: "text-[#466384]", bgColor: "bg-[#466384]/10" },
  { number: "1000+", label: "Happy Customers", color: "text-[#466384]", bgColor: "bg-[#466384]/10" },
  { number: "5.0", label: "Average Rating", color: "text-green-600", bgColor: "bg-green-50" },
  { number: "7", label: "Days Open Per Week", color: "text-yellow-600", bgColor: "bg-yellow-50" },
]

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#466384]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2a3c51]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#466384] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Success
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Achievements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Trusted by customers in Brampton and surrounding areas since 2008</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className={`${stat.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105`}>
                <div className={`text-6xl font-bold ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 text-lg font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
