import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faYoutube, faPinterest } from "@fortawesome/free-brands-svg-icons";


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1E26] text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start">

          <Image
            src="/logo.svg"
            alt="logomark"
            width={130}
            height={80} />


          <div className="flex space-x-4 mt-[5rem]">

            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3613C]">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3613C]">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3613C]">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3613C]">
                <FontAwesomeIcon icon={faPinterest} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F3613C]">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center md:justify-start gap-10 space-x-32 text-center md:text-left">
          <div>
            <Link href="#" className="block mb-2 transition-colors duration-300 hover:text-[#F3613C]">
              Home
            </Link>
            <Link href="#" className="block mb-2 transition-colors duration-300 hover:text-[#F3613C]">
              Pricing
            </Link>
            <Link href="#" className="block mb-2 transition-colors duration-300 hover:text-[#F3613C]">
              Products
            </Link>
            <Link href="#" className="block transition-colors duration-300 hover:text-[#F3613C]">
              About Us
            </Link>
          </div>
          <div>
            <Link href="#" className="block mb-2 transition-colors duration-300 hover:text-[#F3613C]">
              Careers
            </Link>
            <Link href="#" className="block mb-2 transition-colors duration-300 hover:text-[#F3613C]">
              Community
            </Link>
            <Link href="#" className="block transition-colors duration-300 hover:text-[#F3613C]">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Email Input */}
        <div className="flex flex-col items-center md:items-end">
          <form className="flex gap-2 items-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border text-slate-800 border-gray-300 focus:outline-none focus:ring-2  mb-2"
            />

            <Button
              title="Go" />


          </form>
          <div className="text-center mt-[4rem] text-sm text-gray-400">
          &copy; 2020. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;