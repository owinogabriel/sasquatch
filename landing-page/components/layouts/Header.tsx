import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

// Defining header component function
const Header: React.FC = () => {
  return (
    <header className="flex h-20 items-center px-4 md:px-16 lg:px-44">

      <div className="flex items-center justify-between w-full">

        {/* Logo section */}
        <Image className=" "
          src="/logo.svg"
          alt="logomark"
          width={130}
          height={80} />

        {/* Navigation Section */}
        <nav className="hidden md:flex flex-1 justify-center space-x-5 text-[#242E52]">
          <Link href="/"
            className="hover:text-[#9FA0A6] px-4 md:px-2 text-base transition-colors duration-300 font-extralight"
          >
            Pricing
          </Link>

          <Link href="/produc"
            className="hover:text-[#9FA0A6] px-4 md:px-2 text-base transition-colors duration-300 font-extralight"
          >
            Product
          </Link>

          <Link href="/About"
            className="hover:text-[#9FA0A6] px-4 md:px-2 text-base transition-colors duration-300 font-extralight"
          >About Us
          </Link>

          <Link href="/Careers"
            className="hover:text-[#9FA0A6] px-4 md:px-2 text-base transition-colors duration-300 font-extralight"
          >
            Careers
          </Link>

          <Link href="/Community"
            className="hover:text-[#9FA0A6] px-4 md:px-2 text-base transition-colors duration-300 font-extralight"
          >
            Community
          </Link>
        </nav>

        {/* Button  hidden on small screen and displayed on large screens*/}
        <div className="hidden md:flex">
          <Button title="Get Started" />
  
        </div>

      </div>
    </header>
  )
}

export default Header