import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGooglePlay } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-600 mt-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-light text-white mb-6">
            <a href="/pages/Premium" className="hover:text-gray-300">Lorem</a>
            <a href="#" className="hover:text-gray-300">Lorem dolor</a>
            <a href="#" className="hover:text-gray-300">Lorem dolor</a>
            <a href="#" className="hover:text-gray-300">Lorer</a>
            <a href="#" className="hover:text-gray-300">Lorem ipslor</a>
            <a href="#" className="hover:text-gray-300">Lsum dolor</a>
            <a href="#" className="hover:text-gray-300">Lorem ipr</a>
          </nav>

          <hr className="border-gray-500 my-6" />

          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="text-white hover:text-blue-500" size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-white hover:text-blue-500" size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-white hover:text-blue-500" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-white hover:text-pink-500" size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-white hover:text-red-500" size={20} />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Play">
              <FaGooglePlay className="text-white hover:text-green-500" size={20} />
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-2 font-extralight text-sm text-white">
            <a href="#" className="hover:text-gray-300">Receive SMS</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-300">10MinuteMail</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-300">My Phone Number</a>
          </nav>
        </div>
      </footer>

    </div>
  )
}

export default Footer
