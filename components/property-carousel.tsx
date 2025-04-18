"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from "lucide-react"

// Property type definition
type Property = {
  id: string
  title: string
  price: string
  priceType?: string
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  tags: string[]
}

// Sample property data
const properties: Property[] = [
  {
    id: "1",
    title: "Skyper Pool Apartment",
    price: "$280,000",
    location: "1600 Bloomingdale Ave",
    beds: 4,
    baths: 2,
    sqft: 430,
    image: "/images/property1.png", // Local path from public folder
    tags: ["FOR SALE"],
  },
  {
    id: "2",
    title: "North Dillard Street",
    price: "$250",
    priceType: "/mth",
    location: "4329 Neil Gough Rd",
    beds: 4,
    baths: 2,
    sqft: 450,
    image: "/images/property2.png", // Local path from public folder
    tags: ["FOR RENT"],
  },
  {
    id: "3",
    title: "Eaton Garth Penthouse",
    price: "$180,000",
    location: "7723 19th Ave, Brooklyn",
    beds: 4,
    baths: 2,
    sqft: 450,
    image: "/images/property3.png", // Local path from public folder
    tags: ["FOR SALE", "FEATURED"],
  },
  {
    id: "4",
    title: "Riverside Apartment",
    price: "$320,000",
    location: "2134 Riverfront Drive",
    beds: 3,
    baths: 2,
    sqft: 380,
    image: "/images/property1.png",
    tags: ["FOR SALE"],
  },
  {
    id: "5",
    title: "Downtown Loft",
    price: "$1,800",
    priceType: "/mth",
    location: "567 Main Street",
    beds: 2,
    baths: 1,
    sqft: 850,
    image: "/images/property3.png",
    tags: ["FOR RENT", "FEATURED"],
  },
]

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2)
      } else {
        setVisibleCount(3)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const totalSlides = properties.length
  const maxIndex = totalSlides - visibleCount

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index > maxIndex ? maxIndex : index)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Homes For You</h2>
          <p className="text-gray-600 text-sm md:text-base">Based on your view history</p>
        </div>

        <div className="relative">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            aria-label="Previous properties"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className={`px-2 flex-shrink-0 transition-all duration-300`}
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    {/* Tags */}
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex gap-2 z-10">
                        {property.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`text-xs font-semibold py-1 px-3 rounded-full ${
                              tag === "FOR SALE"
                                ? "bg-teal-900 text-white"
                                : tag === "FOR RENT"
                                  ? "bg-teal-900 text-white"
                                  : "bg-amber-400 text-gray-900"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Property Image */}
                      <div className="relative h-48 sm:h-52 md:h-56 lg:h-60 w-full bg-gray-200">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
                        <p className="text-orange-500 font-bold">
                          {property.price}
                          {property.priceType && <span className="text-sm font-normal">{property.priceType}</span>}
                        </p>
                      </div>

                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-700 pt-3 border-t border-gray-100">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1" />
                          <span>{property.sqft} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
              currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
            aria-label="Next properties"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-gray-800" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
