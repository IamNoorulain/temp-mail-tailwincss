'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 min-h-[5rem]">
      <nav className="flex items-center justify-between px-4 py-2 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center">
          <Link href="#" className="text-white hover:text-green-500">
            <Image
              src="/thelogo.svg"
              width={70}
              height={5}
              alt='Logo'
              className="w-auto h-10 sm:h-12 md:h-14 lg:h-16"
            />
          </Link>
        </div>
        
        {/* Hamburger menu button for mobile */}
        <button 
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:flex-1 sm:ml-4 md:ml-6 lg:ml-8">
          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <button className="border border-gray-700 rounded-lg p-2 hover:bg-gray-800 text-white text-sm sm:text-base md:text-lg">
              App Store
            </button>
            <button className="border border-gray-700 rounded-lg p-2 hover:bg-gray-800 text-white text-sm sm:text-base md:text-lg">
              Google Play
            </button>
          </div>
          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <button className="bg-gray-800 rounded-3xl p-2 hover:bg-gray-700 text-white text-sm sm:text-base md:text-lg">
              Temp Number 📲
            </button>
            <button className="bg-yellow-300 hover:bg-orange-400 text-black rounded-3xl p-2 tracking-widest text-sm sm:text-base md:text-lg">
              Premium
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-800 py-4">
          <div className="flex flex-col items-center gap-4">
            <button className="border border-gray-700 rounded-lg p-2 hover:bg-gray-700 text-white text-base w-4/5">
              App Store
            </button>
            <button className="border border-gray-700 rounded-lg p-2 hover:bg-gray-700 text-white text-base w-4/5">
              Google Play
            </button>
            <button className="bg-gray-700 rounded-3xl p-2 hover:bg-gray-600 text-white text-base w-4/5">
              Temp Number 📲
            </button>
            <button className="bg-yellow-300 hover:bg-orange-400 text-black rounded-3xl p-2 tracking-widest text-base w-4/5">
              Premium
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default Header