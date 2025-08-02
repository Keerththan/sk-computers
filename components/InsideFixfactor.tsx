import Image from "next/image"
import { Button } from "./ui/button"

const galleryImages = [
  {
    title: "Professional Repair Workstation",
    description: "State-of-the-art workstation with microscope for precision component-level repairs",
  },
  {
    title: "Clean Room Environment",
    description: "Dust-free environment for delicate motherboard and component repairs",
  },
  {
    title: "Advanced Diagnostic Equipment",
    description: "Latest diagnostic tools for accurate problem identification and testing",
  },
  {
    title: "Component-Level Repair Tools",
    description: "Specialized microsolder equipment for board-level repairs",
  },
  {
    title: "Quality Testing Station",
    description: "Comprehensive testing setup to ensure perfect functionality before return",
  },
  {
    title: "Parts Inventory Storage",
    description: "Extensive inventory of genuine parts for all major laptop brands",
  },
]

export default function InsideFixfactor() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Inside Fixfactor</h2>
          <p className="text-xl text-gray-600">
            Take a look at our state-of-the-art repair facilities and professional equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=300&width=400&query=${image.description}`}
                alt={image.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-3">View All Photos</Button>
        </div>
      </div>
    </section>
  )
}
