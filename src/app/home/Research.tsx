"use client";

import Link from "next/link";
import Image from "next/image";
import { useIntros } from "@/hooks/useIntro";
function Research() {
  const { IntroData: Data } = useIntros();

  return (
    <div className="flex flex-col md:flex-row justify-around h-full lg:h-[70vh] p-7 md:p-7 lg:px-[50px] lg:py-[30px] md:justify-around lg:justify-center  items-center max-w-[1775px] mx-auto">
      <div className="left w-[100%] md:w-[55%] p-1 lg:p-5 mx-auto">
        <p className="text-tertiary text-xl md:text-2xl">About Our Research</p>
        {/* <div className="right -z-2 w-[100%] md:w-[50%] inline my-1 md:hidden"></div>   */}
        <h2 className="lg:py-2 text-2xl md:text-3xl font-semibold text-[#424242]">
          {Data && Data?.research_oneLine}
        </h2>
        <div className="right w-[30%] sm:w-[100%] mx-auto inline md:hidden">
          <Image
            alt="Research Background Image"
            src="/StaticImages/Home_ResearchBgImage.jpg"
            className="md:p-2 translate-y-[0] md:-translate-y-5 mx-auto"
            width={500}
            height={300}
            loading="lazy"
          />
        </div>
        <p className="p-1 md:p-5 text-justify lg:pl-0">
          {Data && Data?.research_Desc}
        </p>
        <Link href="/research">
          <button className="my-10 p-5 border-secondary border-[2px] rounded-[50px] text-secondary font-semibold text-1xl hover:text-primary hover:bg-secondary transition duration-500">
            Our Research
          </button>
        </Link>
      </div>
      <div className="right -z-2 w-[100%] md:w-[30%] hidden md:flex pb-[4rem] mx-auto">
        <Image
          alt="Research Background Image"
          src="/StaticImages/Home_ResearchBgImage.jpg"
          className="p-2 -translate-y-5 mx-auto"
          width={500}
          height={300}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Research;
