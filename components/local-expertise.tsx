import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import localhome1 from "@/public/images/localhome1.png"

type StatItem = {
  value: string
  label: string
}

const stats: StatItem[] = [
  {
    value: "$18M",
    label: "Owned from properties transactions",
  },
  {
    value: "26K",
    label: "Properties for Buy",
  },
  {
    value: "15K",
    label: "Properties for Sale",
  },
  {
    value: "800",
    label: "Daily completed transactions",
  },
]

export default function LocalExpertise() {
  return (
    <section className=" py-16 md:py-12 lg:py-20">
      <div className="container bg-teal-900 border rounded-3xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image
                  src={localhome1}
                  alt="Real estate agent with clients"
                  width={450}
                  height={250}
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-3 left-3 bg-white text-xs px-2 py-1 rounded">PropChain</div>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Local expertise for
              <br />
              luxury homes
            </h2>
            <p className="text-gray-200 mb-6 max-w-lg">
              Pellentesque sagittis elementum porttitor faucibus sem. Vivit nunc sagittis et mollis. Leo diam diam nibh
              eget fermentum massa potenti. Mi rhoncus nulla eu dictum id mauris non.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium rounded-md px-5 py-2 flex items-center gap-2 transition-colors">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-amber-400 text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
              <p className="text-gray-200 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
