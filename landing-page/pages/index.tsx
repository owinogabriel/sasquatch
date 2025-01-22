import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();
  return (
    <div
      className=" relative item-center flex flex-col sm:flex-row gap-8 row-start-2"
    >
      <main className="flex gap-8 row-start-2 items-center sm:items-start">

       {/* Hero section */}
        <div className="gap-4 ml-[9rem] items-center align-text-top mt-[3rem]">
          <h1 className="md:text-6xl text-[#242E52] font-bold">Bring everyone <br /> together to build <br /> better products.</h1>
          <p className="text-[#3d3e3f] py-6">Manage makes it simple for software teams <br /> to plan day-to-day tasks while keeping the <br />
            larger team goals in view.</p>

          <Button title="Get Started" /> // Button imported from the reusable button components.
          {/* image */}
          <div className="absolute md:top-[4rem] md:right-[5rem]">
            <Image
              className="md:w-[24rem]"
              src="/intro.svg"
              alt="logomark"
              width={130}
              height={80}
            />
          </div>




        </div>

      </main>
    </div>
  );
}
