const statistics = [
  { number: "200,000+", label: "Devices Repaired", color: "text-teal-600" },
  { number: "11+", label: "Years Experience", color: "text-blue-600" },
  { number: "1,000+", label: "Happy Customers", color: "text-green-600" },
  { number: "4.9", label: "Average Rating", color: "text-yellow-600" },
]

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey In Numbers</h2>
          <p className="text-xl text-gray-600">Trusted by thousands of customers across London</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
