import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Apple, Play } from "lucide-react"
import Image from "next/image"
import logo from "@/public/images/logo.png"
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { LuTwitter, LuApple, LuPhoneOutgoing } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-10 pb-6">
        {/* Top Bar with Logo and Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-6 mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="relative h-7 w-7 mr-2 bg-white border rounded-full flex items-center justify-center">
              <Image
                     src= {logo}
                       alt="Real estate logo"
                       fill
                       priority
                       className="object-cover"
                     />
            </div>
            <span className="text-xl font-bold text-white">PropChain</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-block text-sm mr-2">Follow Us</span>
            <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <FaFacebookF />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <LuTwitter />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <SiInstagram />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {/* Subscribe */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-medium mb-4">Subscribe</h3>
            <div className="mb-4">
              <label htmlFor="email" className="block text-xs mb-2">
                Your email
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white text-sm rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-700"
                />
                <button
                  type="button"
                  className="bg-gray-800 hover:bg-gray-700 rounded-r-md px-3 flex items-center justify-center"
                >
                  <IoArrowRedoOutline />
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400">Subscribe to our newsletter to receive our weekly feed.</p>
          </div>

          {/* Discover */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-medium mb-4">Discover</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/miami" className="text-sm hover:text-white transition-colors">
                  Miami
                </Link>
              </li>
              <li>
                <Link href="/new-york" className="text-sm hover:text-white transition-colors">
                  New York
                </Link>
              </li>
              <li>
                <Link href="/chicago" className="text-sm hover:text-white transition-colors">
                  Chicago
                </Link>
              </li>
              <li>
                <Link href="/florida" className="text-sm hover:text-white transition-colors">
                  Florida
                </Link>
              </li>
              <li>
                <Link href="/los-angeles" className="text-sm hover:text-white transition-colors">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link href="/san-diego" className="text-sm hover:text-white transition-colors">
                  San Diego
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">hi@PropChain.com</li>
           <li className="text-sm">(+234) 8065786632</li>
            </ul>
          </div>

          {/* Our Address */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-medium mb-4">Our Address</h3>
            <p className="text-sm">
              99 Fifth Avenue, 3rd Floor
              <br />
              San Francisco, CA 94103
            </p>
          </div>

          {/* Get the app */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-sm font-medium mb-4">Get the app</h3>
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2 transition-colors"
              >
               <LuApple />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-medium">Apple Store</div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-md px-3 py-2 transition-colors"
              >
                <CiPlay1 />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800 text-center sm:text-left">
          <p className="text-xs text-gray-400">Copyright © 2024, PropChain</p>
        </div>
      </div>
    </footer>
  )
}
