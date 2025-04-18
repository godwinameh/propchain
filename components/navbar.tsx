"use client"

import Link from "next/link"
import { Phone, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { MdPhoneInTalk } from "react-icons/md";
import logo from "@/public/images/logo.png"
import Image from "next/image";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest("nav") && !target.closest("button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-sm py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-20">
            <div className="relative h-7  bg-white border rounded-full w-7 md:h-8 md:w-8 mr-2">
            <Image
                src={logo }
                alt="logo"
                fill
                priority
                className="h-full w-full bg-white border rounded-full flex items-center justify-center object-cover"
                />
            </div>
            <span className="text-lg md:text-xxl font-bold text-white">PropChain</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-white font-medium hover:bg-white/10 rounded-md transition-colors">
              Home
            </Link>
            <div className="relative group">
              <Link
                href="/listings"
                className="px-3 py-2 text-white font-medium flex items-center hover:bg-white/10 rounded-md transition-colors"
              >
                Listings
                {/* <RiArrowDropDownLine size={35}/> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/listings/for-sale" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    For Sale
                  </Link>
                  <Link href="/listings/for-rent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    For Rent
                  </Link>
                  <Link
                    href="/listings/new-properties"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    New Properties
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/numbers"
                className="px-3 py-2 text-white font-medium flex items-center hover:bg-white/10 rounded-md transition-colors"
              >
                Numbers
                {/* <RiArrowDropDownLine size={35} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/numbers/statistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Statistics
                  </Link>
                  <Link href="/numbers/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Reports
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/blog"
                className="px-3 py-2 text-white font-medium flex items-center hover:bg-white/10 rounded-md transition-colors"
              >
                Blog
                {/* <RiArrowDropDownLine size={35} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/blog/latest" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Latest Posts
                  </Link>
                  <Link href="/blog/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Categories
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/pages"
                className="px-3 py-2 text-white font-medium flex items-center hover:bg-white/10 rounded-md transition-colors"
              >
                Pages
                {/* <RiArrowDropDownLine size={35} /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="/pages/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="/pages/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Our Team
                  </Link>
                  <Link href="/pages/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-3 py-2 text-white font-medium hover:bg-white/10 rounded-md transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center space-x-3 md:space-x-4 z-20">
            <div className="hidden md:flex items-center text-white">
              <MdPhoneInTalk className="h-4 w-4 mr-2" />
              <span>+2348065786632</span>
            </div>
            <div className="hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-700">
              <User className="h-4 w-4" />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap">
              Add Property
            </Button>
            <button
              className="lg:hidden text-white p-1 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900/95 z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="h-full flex flex-col pt-20 pb-6 px-6 overflow-y-auto">
          <nav className="flex-1 flex flex-col space-y-2">
            <Link
              href="/"
              className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-1">
              <Link
                href="/listings"
                className="px-4 py-3 text-white font-medium flex items-center justify-between hover:bg-white/10 rounded-md transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  const submenu = document.getElementById("listings-submenu")
                  if (submenu) {
                    submenu.classList.toggle("hidden")
                  }
                }}
              >
                Listings
                {/* <RiArrowDropDownLine /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div id="listings-submenu" className="hidden pl-4 space-y-1">
                <Link
                  href="/listings/for-sale"
                  className="block px-4 py-2 text-gray-300 hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Sale
                </Link>
                <Link
                  href="/listings/for-rent"
                  className="block px-4 py-2 text-gray-300 hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Rent
                </Link>
                <Link
                  href="/listings/new-properties"
                  className="block px-4 py-2 text-gray-300 hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  New Properties
                </Link>
              </div>
            </div>
            <Link
              href="/numbers"
              className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Numbers
            </Link>
            <Link
              href="/blog"
              className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/pages"
              className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pages
            </Link>
            <Link
              href="/contact"
              className="px-4 py-3 text-white font-medium hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center text-white mb-4">
              <Phone className="h-5 w-5 mr-3" />
              <span className="text-lg">+2348065786632</span>
            </div>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-3 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Property
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
