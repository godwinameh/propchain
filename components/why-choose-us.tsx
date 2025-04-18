import type React from "react"
import { Home, Users, DollarSign, FileText } from "lucide-react"

type FeatureItem = {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: <Home className="h-6 w-6 text-gray-900" />,
    title: "Find your future home",
    description: "We help you find a new home by offering a smart real estate experience",
  },
  {
    icon: <Users className="h-6 w-6 text-gray-900" />,
    title: "Experienced agents",
    description: "Find an experienced agent who knows your market best",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-gray-900" />,
    title: "Buy or rent homes",
    description: "Millions of houses and apartments in your favorite cities",
  },
  {
    icon: <FileText className="h-6 w-6 text-gray-900" />,
    title: "List your own property",
    description: "Sign up now and sell or rent your own properties",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-16 lg:py-20  ">
      <div className="container bg-amber-300 border rounded-3xl mx-auto py-14">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Choose Us</h2>
          <p className="text-gray-800 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-white/20 inline-flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-800 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
