import Link from "next/link"

export default function CityPropertiesPage({ params }: { params: { city: string } }) {
  // This would typically fetch data based on the city parameter
  const city = params.city.replace(/-/g, " ")

  // For demo purposes - in a real app you'd fetch this data
  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-6 capitalize">Properties in {city}</h1>
      <p>This page would display all properties available in {city}.</p>
    </div>
  )
}
