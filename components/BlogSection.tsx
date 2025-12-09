import Image from "next/image"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "How to Extend Your Laptop's Battery Life",
    excerpt:
      "Simple tips and tricks to maximize your laptop's battery performance and longevity. Learn about power management settings and best practices.",
    date: "March 15, 2024",
    author: "Tech Team",
    category: "Tips & Guides",
    image: "laptop battery maintenance and optimization tips",
    readTime: "5 min read",
  },
  {
    title: "Signs Your Laptop Needs Professional Repair",
    excerpt:
      "Learn to identify common warning signs that indicate your laptop requires expert attention before problems become worse.",
    date: "March 10, 2024",
    author: "Repair Experts",
    category: "Diagnostics",
    image: "laptop diagnostic signs and symptoms",
    readTime: "7 min read",
  },
  {
    title: "Buying Guide: Best Used Laptops in 2024",
    excerpt:
      "Our expert recommendations for the best value used laptops across different price ranges and use cases for students and professionals.",
    date: "March 5, 2024",
    author: "Sales Team",
    category: "Buying Guide",
    image: "collection of quality refurbished laptops",
    readTime: "10 min read",
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest tips, guides, and industry insights</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=250&width=400&query=${post.image}`}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center group hover:text-teal-600 transition-colors">
                    <Calendar className="w-4 h-4 mr-1 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                    {post.date}
                  </div>
                  <div className="flex items-center group hover:text-teal-600 transition-colors">
                    <User className="w-4 h-4 mr-1 group-hover:scale-110 transition-all duration-300" />
                    {post.author}
                  </div>
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Button variant="link" className="p-0 text-teal-600 group-hover:text-teal-700 transition-all duration-300">
                    Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-3">View All Articles</Button>
        </div>
      </div>
    </section>
  )
}
