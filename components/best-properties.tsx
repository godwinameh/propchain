import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react"

export default function BestProperties() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Best Properties</h2>
          <p className="text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* Main Interior Image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/best%20property%20card-n6bqrDBOc4dFq5eBdBqwwml2mfmSlt.png"
                alt="Modern living room interior"
                width={600}
                height={350}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Two Small Images Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Properties Count Box */}
              <div className="bg-gray-900 rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">280+</h3>
                  <p className="text-white text-sm font-medium mb-4">Properties</p>
                  <p className="text-gray-300 text-sm">
                    Explore our wide variety of properties in to your dream home area.
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href="/properties"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-gray-900" />
                  </Link>
                </div>
              </div>

              {/* Small Interior Image */}
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/best%20property%20card-n6bqrDBOc4dFq5eBdBqwwml2mfmSlt.png"
                  alt="Modern dining area"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Featured Property */}
          <div className="relative rounded-lg overflow-hidden h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/best%20property%20card-n6bqrDBOc4dFq5eBdBqwwml2mfmSlt.png"
              alt="Villa One Hyde Park"
              width={600}
              height={700}
              className="w-full h-full object-cover rounded-lg"
            />

            {/* Tags */}
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="text-xs font-semibold py-1 px-3 rounded-full bg-teal-900 text-white">FOR SALE</span>
              <span className="text-xs font-semibold py-1 px-3 rounded-full bg-amber-400 text-gray-900">FEATURED</span>
            </div>

            {/* Property Details */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Villa One Hyde Park</h3>

              <div className="flex items-center text-gray-200 text-sm mb-3">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span>205 Brownsdale Ave</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-white font-bold text-lg md:text-xl mb-2 sm:mb-0">$120,000</p>

                <div className="flex items-center space-x-4 text-sm text-gray-200">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>4</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>2</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>1,800 sqft</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
