// app/blog/[slug]/page.tsx
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Metadata } from 'next'

type PageProps = {
  params: {
    slug: string
  }
}

// Simulated blog data source (replace with real fetch later)
const mockPosts = [
  {
    slug: "sample-slug",
    title: "Sample Blog Title",
    date: "March 15, 2024",
    content: `
      <p>This is a sample blog post content. In a real app, this would come from a CMS.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dui mauris...</p>
      <h2>Key Points</h2>
      <ul>
        <li>First key point</li>
        <li>Second key point</li>
        <li>Third key point</li>
      </ul>
    `,
  },
]

// Function to get blog data based on slug
async function getPostData(slug: string) {
  const post = mockPosts.find((post) => post.slug === slug)
  return post || null
}

// Required by App Router to statically generate dynamic paths
export async function generateStaticParams() {
  return mockPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Page component
export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 capitalize">{post.title}</h1>

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span>Category: Apartment</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>

        <div className="relative h-64 md:h-96 w-full mb-8">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Inject blog content — safe if you're sanitizing it */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}
