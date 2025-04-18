import Image from "next/image"
import Link from "next/link"

type CityProperty = {
  id: string
  name: string
  propertyCount: number
  image: string
  slug: string
  size?: "large" | "medium" | "small"
}

const cities: CityProperty[] = [
  {
    id: "1",
    name: "New York",
    propertyCount: 8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "new-york",
    size: "large",
  },
  {
    id: "2",
    name: "Chicago",
    propertyCount: 7,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "chicago",
    size: "medium",
  },
  {
    id: "3",
    name: "Los Angeles",
    propertyCount: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "los-angeles",
    size: "medium",
  },
  {
    id: "4",
    name: "San Diego",
    propertyCount: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "san-diego",
    size: "small",
  },
  {
    id: "5",
    name: "Florida",
    propertyCount: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "florida",
    size: "small",
  },
  {
    id: "6",
    name: "Florida",
    propertyCount: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "florida",
    size: "small",
  },
  {
    id: "7",
    name: "Miami",
    propertyCount: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "miami",
    size: "medium",
  },
  {
    id: "8",
    name: "Miami",
    propertyCount: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cardrealestate2-d4EDezIWCLqZrNwF2FzhnU1OgMdSlv.png",
    slug: "miami",
    size: "medium",
  },
]

export default function CityPropertiesGrid() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Find Properties in These Cities</h2>
          <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/properties/${city.slug}`}
              className={`group relative rounded-lg overflow-hidden transition-transform hover:scale-[1.02] ${
                city.size === "large"
                  ? "sm:col-span-2 sm:row-span-1"
                  : city.size === "medium"
                    ? "sm:col-span-1 sm:row-span-1"
                    : "sm:col-span-1 sm:row-span-1"
              }`}
            >
              <div
                className={`relative w-full ${
                  city.size === "large"
                    ? "h-64 sm:h-72 md:h-80"
                    : city.size === "medium"
                      ? "h-56 sm:h-64 md:h-72"
                      : "h-48 sm:h-56 md:h-64"
                }`}
              >
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={`${city.name} cityscape`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-4 md:p-5 w-full">
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-medium mb-1">
                      {city.propertyCount} {city.propertyCount === 1 ? "Property" : "Properties"}
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-bold">{city.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
