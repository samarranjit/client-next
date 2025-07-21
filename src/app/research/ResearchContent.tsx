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

function Research() {
  // const { showLoading }: AppContextType = useContext(allContexts);
  const bgImg =
    "https://res.cloudinary.com/cholab/image/upload/v1736473392/BGRESEARCH_gdpudo.jpg";
  // const { researchData }: { researchData: ResearchCardData[] } =    useResearchContext();
  const { ResearchPosts: researchData, isLoading, _error } = useResearchPosts();
  console.log("Error:", _error ?? "No error");
  return (
    <div>
      <Navbar />
      <div className="Intro-bg-img-div -z-10">
        {isLoading ? (
          <Loader />
        ) : (
          <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className="h-[100vh] md:h-[90vh] overflow-hidden bg-scroll md:bg-fixed bg-cover bg-center md:bg-top pt-[65px] md:pt-0"
          >
            <div className="w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center p-2 md:justify-left md:ml-[15%] md:p-0">
              <div className="intro-text w-[90%] md:w-[70%] lg:w-[40%] p-4 md:p-10 gap-2 md:gap-7 flex flex-col items-center justify-around bg-secondary/65 py-4 md:py-auto">
                <p className="text-lg md:text-2xl text-tertiary text-left w-full font-semibold align-left justify-left">
                  Our Research
                </p>
                <h1 className="text-2xl md:text-4xl font-semibold text-primary">
                  Hydrology and Water Resources in a Changing Climate for a
                  Sustainable Environment
                </h1>
                <p className="text-primary">
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
          </div>
        )}
      </div>

      <div className="themes bg-secondary h-full p-8 pb-10">
        <div className="title text-center text-tertiary font-semibold text-3xl my-5 mb-0">
          Themes in Our Work
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:p-10 text-center gap-10">
          <div className="flex w-[100%] justify-center items-center text-center text-primary">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
                <GiMaterialsScience />
              </div>
              <div className="my-4 text-2xl mb-5">Impact Driven Science</div>
              <h2 className="text-center p-3">
                Our research addresses real-world challenges in water resources,
                climate change, and extreme events to drive meaningful societal
                and environmental impacts.
              </h2>
            </div>
          </div>

          <div className="flex w-[100%] justify-center items-center text-center text-primary">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
                <GiComputerFan />
              </div>
              <div className="my-4 text-2xl mb-5">Computational Modeling</div>
              <h2 className="text-center p-3">
                We apply advanced computational tools and AI/ML-driven models to
                simulate complex hydrological, cryosphere, and agricultural
                systems for informed decision-making.
              </h2>
            </div>
          </div>

          <div className="flex w-[100%] justify-center items-center text-center text-primary">
            <div className="flex justify-center items-center flex-col">
              <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
                <FaSatelliteDish />
              </div>
              <div className="my-4 text-2xl mb-5">Remote Sensing</div>
              <h2 className="text-center p-3">
                Using satellite and UAV-based remote sensing, we collect
                high-resolution data to monitor and analyze Earth's dynamic
                water systems.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="inline-block h-[full] p-4 py-9 md:p-[5rem] research-div bg-white pb-0 md:pb-[0rem]">
        <h2 className="text-tertiary text-lg font-semibold md:text-2xl md:font-normal">
          Our Research Projects:
        </h2>
        <div className="h-[3px] bg-tertiary my-3 w-[27%]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-0 gap-7">
          {researchData &&
            researchData.map((item: ResearchCardData) => (
              <ResearchCard key={item._id} research={item} />
            ))}
        </div>
      </div>

      <div className="translate-y-[5.6rem]">
        <div
          style={{
            backgroundImage: `url(https://res.cloudinary.com/cholab/image/upload/v1736473223/Home_ResearchBgImage_ntjeir.jpg)`,
          }}
          className="h-[80vh] md:h-[90vh] overflow-hidden bg-fixed bg-cover bg-top"
        >
          <div className="w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center ml-0 p-2 md:ml-0 md:p-2">
            <div className="collaboration-call w-[90%] md:w-[70%] lg:w-[40%] p-4 gap-2 md:gap-7 md:p-10 flex flex-col items-center justify-center bg-secondary/65 bg-opacity-65">
              <p className="text-lg md:text-2xl text-tertiary text-center w-full font-semibold align-center justify-center">
                Want to Collaborate?
              </p>
              <h1 className="text-xl md:text-2xl font-semibold text-primary">
                Let's work together to create change
              </h1>
              <p className="text-primary">
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
                <button className="border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500">
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
