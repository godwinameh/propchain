"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  avatar: string
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Cameron Williamson",
    role: "Designer",
    avatar: "/images/lady.png",
    content:
      "Searches for multiples, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    role: "Real Estate Agent",
    avatar: "/images/testimonials/avatar2.jpg",
    content:
      "The platform is incredibly intuitive and makes finding properties a breeze. I've been able to help my clients find their dream homes much faster. Highly recommended for any real estate professional.",
  },
  {
    id: 3,
    name: "Robert Johnson",
    role: "Home Buyer",
    avatar: "/images/testimonials/avatar3.jpg",
    content:
      "As a first-time home buyer, I was nervous about the process. This platform made everything so much easier to understand. The property comparisons feature helped me make an informed decision.",
  },
]

// Updated partner logos with icon paths
const partnerLogos = [
  { name: "Amazon", logo: "/partners/amazon.jpg" },
  { name: "AMD", logo: "/partners/amd.png" },
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "Dropcom", logo: "/partners/dropcom1.png" },
  { name: "Logitech", logo: "/partners/logitech.png" },
  { name: "Spotify", logo: "/partners/spotify.png" },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Heading and Stats */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              What our customers are
              <br />
              saying us?
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md">
              Various solutions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor
              and the like).
            </p>

            <div className="flex items-center space-x-12 mb-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">10m+</div>
                <div className="text-gray-600 text-sm">Happy People</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900">4.88</div>
                <div className="text-gray-600 text-sm">Overall rating</div>
                <div className="flex mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div className="relative">
            <div className="mb-8 relative">
              {/* Quote mark */}
              <div className="absolute right-0 top-0 text-gray-900 text-6xl leading-none">"</div>

              {/* Testimonial Content */}
              <div className="flex items-start mb-6">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                    {/* Using regular img tag instead of Next.js Image */}
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{testimonials[currentTestimonial].content}</p>

              {/* Navigation Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <p className="text-center text-gray-600 mb-8">Thousands of world's leading companies trust Space</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                <div className="h-[30px] w-[100px] flex items-center justify-center">
                  {/* Using regular img tag instead of Next.js Image */}
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-full object-contain"
                    onError={(e) => {
                      // If image fails to load, replace with text
                      const parent = e.currentTarget.parentElement
                      if (parent) {
                        parent.innerHTML = `<span class="text-gray-700 font-medium">${partner.name}</span>`
                        parent.classList.add("bg-gray-100", "rounded")
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
