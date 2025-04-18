import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { posts } from "@/lib/posts"

export default function RecentArticles() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Recent Articles & News</h2>
          <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/blog/${article.slug}`} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.imagePath}
                    alt={article.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                    priority={article.id === "1"}
                  />
                </div>
              </Link>
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{article.category}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/blog/${article.slug}`} className="hover:text-gray-700">
                    {article.title}
                  </Link>
                </h3>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
