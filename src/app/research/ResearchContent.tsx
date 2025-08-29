"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import { GiComputerFan, GiMaterialsScience } from "react-icons/gi";
import ResearchCard from "./ResearchCard";
import { FaSatelliteDish } from "react-icons/fa";
import { ResearchCardData } from "@/types";
import { useResearchPosts } from "@/hooks/useResearchesPosts";
import Image from "next/image";

function Research() {
  const { ResearchPosts: researchData, isLoading, _error } = useResearchPosts();
  console.log("Error:", _error ?? "No error");

  return (
    <div>
      <Navbar />
      <div className="h-[100vh] lg:h-[90vh]">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="h-[100vh] lg:h-[90vh] relative overflow-hidden">
            {/* Animated Background - Responsive */}
            <div className="absolute inset-0 z-[-1]">
              <div
                className="w-[300vw] h-full flex"
                style={{
                  animation: "slideAcrossRepeat 120s linear infinite",
                }}
              >
                <Image
                  src="/StaticImages/MapOfWorld2.png"
                  alt="Background"
                  loading="lazy"
                  width={1920}
                  height={774}
                  className="flex-shrink-0 w-[100%] object-cover object-center"
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
                <Image
                  src="/StaticImages/MapOfWorld2.png"
                  alt="Background"
                  loading="lazy"
                  width={1920}
                  height={774}
                  className="flex-shrink-0 w-[100%] object-cover object-center"
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
                <Image
                  src="/StaticImages/MapOfWorld2.png"
                  alt="Background"
                  loading="lazy"
                  width={1920}
                  height={774}
                  className="flex-shrink-0 w-[100%]  object-cover object-center"
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </div>
            </div>

            {/* Hero Content - Fully Responsive */}
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 md:justify-start md:pl-[5%] lg:pl-[10%] xl:pl-[15%]">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-secondary/65 backdrop-blur-sm">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary font-semibold mb-3 md:mb-4">
                  Our Research
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 md:mb-6 leading-tight">
                  Hydrology and Water Resources in a Changing Climate for a
                  Sustainable Environment
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-primary leading-relaxed">
                  We are building a dynamic team of undergraduate and graduate
                  students and postdocs who share our passion to better
                  understand hydrology and water resources in a changing climate
                  for a sustainable environment. To achieve this, we use field
                  observations from station data and field campaign, multiple
                  remote sensing techniques, land surface hydrologic models, and
                  climate models along with big-data and machine learning (ML)
                  techniques.
                </p>
              </div>
            </div>

            <style jsx>{`
              @keyframes slideAcrossRepeat {
                0% {
                  transform: translateX(-66.666%);
                }
                100% {
                  transform: translateX(0%);
                }
              }
            `}</style>
          </div>
        )}
      </div>

      {/* Themes Section - Enhanced Responsiveness */}
      <div className="relative bg-secondary py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-tertiary font-semibold text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 lg:mb-16">
            Themes in Our Work
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            <div className="flex justify-center items-center text-center text-primary">
              <div className="flex justify-center items-center flex-col max-w-sm">
                <div className="bg-tertiary p-3 sm:p-4 lg:p-5 text-secondary text-3xl sm:text-4xl lg:text-5xl rounded-full mb-4 sm:mb-6">
                  <GiMaterialsScience />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 font-medium">
                  Impact Driven Science
                </div>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                  Our research addresses real-world challenges in water
                  resources, climate change, and extreme events to drive
                  meaningful societal and environmental impacts.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center text-center text-primary">
              <div className="flex justify-center items-center flex-col max-w-sm">
                <div className="bg-tertiary p-3 sm:p-4 lg:p-5 text-secondary text-3xl sm:text-4xl lg:text-5xl rounded-full mb-4 sm:mb-6">
                  <GiComputerFan />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 font-medium">
                  Computational Modeling
                </div>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                  We apply advanced computational tools and AI/ML-driven models
                  to simulate complex hydrological, cryosphere, and agricultural
                  systems for informed decision-making.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center text-center text-primary md:col-span-2 lg:col-span-1">
              <div className="flex justify-center items-center flex-col max-w-sm">
                <div className="bg-tertiary p-3 sm:p-4 lg:p-5 text-secondary text-3xl sm:text-4xl lg:text-5xl rounded-full mb-4 sm:mb-6">
                  <FaSatelliteDish />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 font-medium">
                  Remote Sensing
                </div>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed px-2">
                  Using satellite and UAV-based remote sensing, we collect
                  high-resolution data to monitor and analyze Earth's dynamic
                  water systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Projects Section - Enhanced Grid */}
      <div className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-tertiary text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">
            Our Research Projects:
          </h2>
          <div className="h-[3px] bg-tertiary w-[120px] sm:w-[150px] md:w-[200px] mb-6 sm:mb-8 lg:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {researchData &&
              researchData.map((item: ResearchCardData) => (
                <ResearchCard key={item._id} research={item} />
              ))}
          </div>
        </div>
      </div>

      {/* Collaboration Section - Improved Positioning */}
      <div className="relative">
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/cholab/image/upload/v1736473223/Home_ResearchBgImage_ntjeir.jpg)`,
          }}
          className="h-[70vh] sm:h-[80vh] md:h-[90vh] bg-fixed bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-6 md:p-8 lg:p-10 bg-secondary/75 backdrop-blur-sm text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-tertiary font-semibold mb-3 md:mb-4">
                Want to Collaborate?
              </p>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 md:mb-6">
                Let's work together to create change
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-primary leading-relaxed mb-6 md:mb-8">
                We are building a dynamic team of undergraduate and graduate
                students and postdocs who share our passion to better understand
                hydrology and water resources in a changing climate for a
                sustainable environment. To achieve this, we use field
                observations from station data and field campaign, multiple
                remote sensing techniques, land surface hydrologic models, and
                climate models along with big-data and machine learning (ML)
                techniques.
              </p>
              <Link
                href="mailto:eunsang.cho@txstate.edu"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border-primary border-2 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg text-primary hover:bg-primary hover:text-black transition-all duration-500 font-medium">
                  Email Dr. Cho
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Research;
