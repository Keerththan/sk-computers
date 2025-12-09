import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MapPin, Clock, Phone } from "lucide-react"

const locations = [
  {
    name: "Central London",
    address: "123 Oxford Street, London W1D 2HX",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM\nSunday: 11:00 AM - 5:00 PM",
    phone: "020 7123 4567",
    image: "modern repair shop storefront in central London",
    primaryButton: "bg-teal-600 hover:bg-teal-700",
    primaryText: "Get Directions",
  },
  {
    name: "Wimbledon",
    address: "456 High Street, Wimbledon SW19 1AB",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM\nSunday: 11:00 AM - 5:00 PM",
    phone: "020 8543 7088",
    image: "professional laptop repair shop in Wimbledon",
    primaryButton: "bg-yellow-500 hover:bg-yellow-600 text-white",
    primaryText: "Get Directions",
  },
]

export default function LocationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our London Locations</h2>
          <p className="text-xl text-gray-600">Visit us at either of our convenient London locations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={`/placeholder.svg?height=250&width=500&query=${location.image}`}
                  alt={`${location.name} Store`}
                  width={500}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-teal-600">
                  {location.name}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{location.name}</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0 group-hover:bounce group-hover:scale-110 transition-all duration-300" />
                    <p className="text-gray-600">{location.address}</p>
                  </div>

                  <div className="flex items-start space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                    <Clock className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    <div className="text-gray-600">
                      {location.hours.split("\n").map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-300">
                    <Phone className="w-5 h-5 text-teal-600 flex-shrink-0 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    <p className="text-gray-600">{location.phone}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className={location.primaryButton}>{location.primaryText}</Button>
                  <Button variant="outline">Call Store</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
