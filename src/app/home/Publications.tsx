"use client";
import Link from "next/link";
import Image from "next/image";
import { useIntros } from "@/hooks/useIntro";

function Publications() {
  const { IntroData: Data } = useIntros();

  return (
    <div className="h-full p-7 md:p-[65px] bg-secondary flex flex-col md:flex-row justify-around items-center wave-top relative ">
      <div className="custom-shape-divider-top-1730584481 translate-y-9 md:translate-y-[2rem] hidden md:block rotate-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="right hidden md:block w-[75%] md:w-[30%] -translate-y-5">
        <Image
          src="/StaticImages/PublicationsBgImage.jpg"
          alt="Publications Background"
          className="w-[100%] mx-auto"
          width={500}
          height={300}
          loading="lazy"
        />
      </div>
      <div className="left w-[100%] md:w-[55%] p-5">
        <p className="text-tertiary text-xl md:text-2xl text-left md:text-right font-semibold p-0 md:px-5">
          Publications
        </p>
        <h2 className="py-5 text-xl md:text-3xl font-semibold text-[#f9f9f9]">
          {Data && Data?.publication_oneLine}
        </h2>
        <p className="p-1 md:p-5 text-primary text-justify md:text-right">
          {Data && Data?.publication_desc}
        </p>
        <Link href="/publication">
          <button className="my-10 p-5 flex right-0  mx-0 md:mx-5 ml-auto border-tertiary border-[2px] rounded-[50px] text-primary bg-tertiary font-semibold text-1xl hover:text-secondary hover:bg-primary hover:border-secondary transition duration-500">
            Our Publications
          </button>
        </Link>
      </div>
      <div className="right w-[90%] block md:hidden">
        <Image
          src="/StaticImages/PublicationsBgImage.jpg"
          alt="Publications Background"
          width={400}
          height={250}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Publications;
