import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";
import Testimonials from "@/components/common/Testmonies";

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

          <div className="md:mt-[10rem] md:flex-1">
            <h1 className="md:text-3xl text-[#242E52] font-bold leading-relaxed">
              What's different about <br /> Manage?
            </h1>
            <p className="text-[#bcb9b9] py-4 font-extralight text-sm leading-relaxed">
              Manage provides all the functionality your <br />
              team needs, without the complexity. Our <br />
              software is tailor-made for modern digital <br />
              product teams.
            </p>

            <div className="justify-center">
              <div className="absolute md:top-[30rem] md:right-[5rem] space-y-4">
                {/* Feature 1 */}
                <div className="inline-flex items-center gap-4 text-lg text-[#242E52] font-bold">
                  <span className="h-10 w-10 flex items-center justify-center bg-[#FF6B6B] text-white font-bold rounded-full">
                    01
                  </span>
                  Track company-wide progress
                </div>
                <p className="mt-2 text-[#bcb9b9] font-extralight text-sm leading-relaxed">
                  See how your day-to-day tasks fit into the wider vision. <br />
                  Go from tracking progress at the milestone level all the <br />
                  way down to the smallest of details. Never lose sight of <br />
                  the bigger picture again.
                </p>

                {/* Feature 2 */}
                <div className="inline-flex items-center gap-4 text-lg text-[#242E52] font-bold">
                  <span className="h-10 w-10 flex items-center justify-center bg-[#FF6B6B] text-white font-bold rounded-full">
                    02
                  </span>
                  Advanced built-in reports
                </div>
                <p className="mt-2 text-[#bcb9b9] font-extralight text-sm leading-relaxed">
                  Set internal delivery estimates and track progress toward <br />
                  company goals. Our customizable dashboard helps you <br />
                  build out the reports you need to keep key stakeholders <br />
                  informed.
                </p>

                <div className="mb-2">
                  {/* Feature 2 */}
                  <div className="inline-flex items-center gap-4 text-lg text-[#242E52] font-bold">
                    <span className="h-10 w-10 flex items-center justify-center bg-[#FF6B6B] text-white font-bold rounded-full">
                      03
                    </span>
                    Everything you need in one place
                  </div>
                  <p className="mt-2 text-[#bcb9b9] font-extralight text-sm leading-relaxed">
                    Stop jumping from one service to another to <br />
                    communicate, state files, track tasks and share<br />
                    documents,Manage offer an all-in-one team<br />productivty solution
                  </p>

                </div>
          
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
