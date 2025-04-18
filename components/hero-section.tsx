import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import bg from '@/public/images/bg.jpeg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
        src={bg}
          alt="Real estate background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <span className="inline-block bg-black/50 text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1 rounded-full">
                LET US HELP YOU FIND HOME
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 lg:mb-10 leading-tight">
              Discover a place you'll
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              love to live
            </h1>

            {/* Search Section */}
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-xl">
                <div className="flex mb-3 md:mb-4 border-b border-gray-100">
                  <button className="px-3 sm:px-4 md:px-6 py-2 md:py-2 text-sm md:text-base text-gray-700 font-medium border-b-2 border-orange-500 transition-colors">
                    Sell
                  </button>
                  <button className="px-3 sm:px-4 md:px-6 py-2 md:py-2 text-sm md:text-base text-gray-500 font-medium hover:text-gray-700 transition-colors">
                    Rent
                  </button>
                </div>
                <div className="flex items-center">
                  <Input
                    type="text"
                    placeholder="Enter name, keywords..."
                    className="flex-1 border-none shadow-none focus-visible:ring-0 text-sm md:text-base h-10 md:h-12 px-4"
                  />
                  <Button className="bg-orange-500 hover:bg-orange-600 rounded-full h-10 w-10 md:h-12 md:w-12 p-0 flex items-center justify-center ml-2 shadow-md transition-colors">
                    <Search className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
