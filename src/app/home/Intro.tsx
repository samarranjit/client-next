"use client";

import Loader from "../../components/Loader";
import { useIntros } from "@/hooks/useIntro";

function Intro() {
  // const { Data, showLoading } = useContext(allContexts);
  const { IntroData: Data, isLoading: showLoading, error } = useIntros();
  // console.log("IntroData:", Data, "Loading:", showLoading, "Error:", error);
  const img = `/StaticImages/HomeBgImg.jpg`;

  return (
    <>
      <div className="Intro-bg-img-div -z-10">
        {showLoading ? (
          <Loader />
        ) : (
          <div className="h-[60vh] lg:h-[90vh] lg:bg-fixed bg-cover bg-no-repeat bg-center md:bg-right lg:bg-right-bottom bg-scroll relative">
            {Data && (
              <img
                src={img}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-[-1] items-center "
                loading="lazy"
                style={{ pointerEvents: "none", userSelect: "none" }}
              />
            )}
            <div className="bg-secondary/5 h-full w-full relative">
              <div className="bg-secondary/15 w-[100%] h-[100%]  items-center justify-center">
                <div className="intro-text w-[100%] h-[100%] flex flex-col items-center justify-center lg:translate-y-[0px] md:translate-y-[-10px] sm:translate-y-[20px] max-w-[1775px] mx-auto">
                  <p className="font-bold text-primary text-2xl md:text-5xl ">
                    The Cho Lab at TXST
                  </p>
                  <h1 className="text-sm md:text-2xl text-center  md:mt-0 p-7 md:pt-2 font-semibold text-primary leading-normal">
                    " {Data?.slogan} "
                  </h1>
                </div>
              </div>
              <div className="custom-shape-divider-bottom-1732665275 hidden lg:inline md:bottom-[-2px]">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Intro;
