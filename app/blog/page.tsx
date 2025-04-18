import Link from "next/link"
import Image from "next/image"

export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const slug = params.slug

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 capitalize">{slug.replace(/-/g, " ")}</h1>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Apartment</span>
          <span className="mx-2">•</span>
          <span>March 15, 2024</span>
        </div>

        <div className="relative h-64 md:h-96 w-full mb-8">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt={slug.replace(/-/g, " ")}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose max-w-none">
          <p>
            This is a sample blog post content. In a real application, this would be the actual content of the blog post
            fetched from a database or CMS based on the slug: <strong>{slug}</strong>.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
            erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>

          <h2>Key Points</h2>
          <ul>
            <li>First important point about real estate</li>
            <li>Second key insight about the market</li>
            <li>Third valuable piece of information</li>
          </ul>

          <p>
            Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
            libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor.
          </p>
        </div>
      </div>
    </div>
  )
}
