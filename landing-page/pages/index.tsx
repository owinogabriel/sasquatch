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
        <div className="gap-4 md:ml-[9rem] items-center align-text-top md:mt-[3rem]">
          <h1 className="md:text-5xl text-[#242E52] font-bold">Bring everyone <br /> together to build <br /> better products.</h1>
          <p className="text-[#bcb9b9] py-4 font-extralight text-sm">Manage makes it simple for software teams <br /> to plan day-to-day tasks while keeping the <br />
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

          <div className="md:mt-[6rem] md:flex-1">
            <h1 className="md:text-3xl text-[#242E52] font-bold">What's different about <br /> Manage?</h1>
            <p className="text-[#bcb9b9] py-4 font-extralight text-sm">Manage provides all the functionality your <br />
              teams needs, without the complexity. Our <br />
              software is tailor-made for modern digital <br />
              products teams.</p>

            <div className="absolute md:bottom-2 md:right-[2rem]">
              <div className="inline-flex text-lg items-center justify-center gap-4 text-[#242E52] font-bold rounded-full">
                <span className="h-10 w-10 py-2 px-2  bg-[#FF6B6B] text-white font-bold rounded-full">02</span>

                Advanced built-in reports

              </div>
              <div>
                {/* <h3 className="text-lg font-bold text-[#242E52]">
                  Advanced built-in reports
                </h3> */}
                <p className="mt-2 text-[#bcb9b9] py-4 font-extralight text-sm">
                  Set internal delivery estimates and track progress toward <br /> company goals. Our customizable dashboard helps youb <br /> build out the reports you need to keep key stakeholders <br /> informed.
                </p>
              </div>
            </div>
            <div>


            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
