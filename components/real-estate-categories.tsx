"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type TabType = "real-estate" | "new-homes" | "popular-area" | "popular-searches"

const tabData = {
  "real-estate": [
    [
      "Real Estate NY",
      "Real Estate Brooklyn",
      "Real Estate Queens",
      "Real Estate The Bronx",
      "Real Estate Staten",
      "Real Estate Jersey",
    ],
    [
      "Real Estate Norwalk",
      "Real Estate Downey",
      "Real Estate Torrance",
      "Real Estate Palmdale",
      "Real Estate Glendale",
      "Real Estate Inglewood",
    ],
    [
      "Real Estate Chicago",
      "Real Estate Cook",
      "Real Estate Kane",
      "Real Estate Lake",
      "Real Estate Will",
      "Real Estate DuPage",
    ],
    [
      "Real Estate Miami",
      "Real Estate Orlando",
      "Real Estate Charlotte",
      "Real Estate Crick",
      "Real Estate Clay",
      "Real Estate Cedar",
    ],
    [
      "Real Estate Columbia",
      "Real Estate Belden",
      "Real Estate Dale",
      "Real Estate Doral",
      "Real Estate Fairchild",
      "Real Estate Flagler",
    ],
  ],
  "new-homes": [
    [
      "New Homes New York",
      "New Homes Brooklyn",
      "New Homes Queens",
      "New Homes Bronx",
      "New Homes Staten Island",
      "New Homes Jersey",
    ],
    [
      "New Homes California",
      "New Homes Los Angeles",
      "New Homes San Francisco",
      "New Homes San Diego",
      "New Homes Sacramento",
      "New Homes Oakland",
    ],
    [
      "New Homes Texas",
      "New Homes Austin",
      "New Homes Dallas",
      "New Homes Houston",
      "New Homes San Antonio",
      "New Homes Fort Worth",
    ],
    [
      "New Homes Florida",
      "New Homes Miami",
      "New Homes Orlando",
      "New Homes Tampa",
      "New Homes Jacksonville",
      "New Homes Naples",
    ],
    [
      "New Homes Illinois",
      "New Homes Chicago",
      "New Homes Aurora",
      "New Homes Naperville",
      "New Homes Joliet",
      "New Homes Rockford",
    ],
  ],
  "popular-area": [
    ["Downtown", "Midtown", "Uptown", "Westside", "Eastside", "Southside"],
    ["Beachfront", "Lakefront", "Mountain View", "City Center", "Suburban", "Rural"],
    [
      "Historic District",
      "Arts District",
      "Financial District",
      "Shopping District",
      "University Area",
      "Entertainment District",
    ],
    ["Waterfront", "Gated Community", "Golf Community", "Retirement Community", "Family-Friendly", "Pet-Friendly"],
    ["High-Rise", "Mid-Rise", "Low-Rise", "Single Family", "Townhomes", "Condominiums"],
  ],
  "popular-searches": [
    ["Homes with Pool", "Waterfront Properties", "Luxury Homes", "Fixer-Upper", "New Construction", "Foreclosures"],
    [
      "Pet-Friendly Apartments",
      "Furnished Rentals",
      "Short-Term Rentals",
      "Long-Term Rentals",
      "Utilities Included",
      "No Fee Apartments",
    ],
    ["Open Houses", "Price Reduced", "Recently Listed", "Virtual Tours", "3D Tours", "Move-in Ready"],
    ["Under $500K", "$500K-$1M", "$1M-$2M", "$2M-$5M", "$5M-$10M", "Over $10M"],
    ["1+ Bedroom", "2+ Bedrooms", "3+ Bedrooms", "4+ Bedrooms", "5+ Bedrooms", "Studio Apartments"],
  ],
}

export default function RealEstateCategories() {
  const [activeTab, setActiveTab] = useState<TabType>("real-estate")

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex flex-wrap -mb-px">
            <button
              className={`mr-6 md:mr-8 py-4 border-b-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "real-estate"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("real-estate")}
            >
              Real Estate
            </button>
            <button
              className={`mr-6 md:mr-8 py-4 border-b-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "new-homes"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("new-homes")}
            >
              New Homes
            </button>
            <button
              className={`mr-6 md:mr-8 py-4 border-b-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "popular-area"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("popular-area")}
            >
              Popular Area
            </button>
            <button
              className={`py-4 border-b-2 text-sm md:text-base font-medium transition-colors ${
                activeTab === "popular-searches"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("popular-searches")}
            >
              Popular Searches
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-3">
            {tabData[activeTab].map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={`/${activeTab}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm text-gray-700 hover:text-gray-900 hover:underline"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Agent Registration */}
        <div className="bg-amber-100 rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Become a Real Estate Agent</h2>
            <p className="text-gray-600">We only work with the best companies around the globe</p>
          </div>
          <Button className="bg-amber-300 hover:bg-amber-400 text-gray-900 font-medium px-6 py-2 rounded-md flex items-center">
            Register Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
