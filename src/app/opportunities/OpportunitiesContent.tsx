// src/app/opportunities/OpportunitiesContent.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaHandHoldingWater } from "react-icons/fa";
import Quality from "./Quality";
import MeetChoLab from "./MeetChoLab";
import VacancyAnnouncement from "./VacancyAnnouncement";
import Link from "next/link";
import { useOpportunitiesPosts } from "@/hooks/useOpportunitiesPosts";
import Image from "next/image";

function OpportunitiesContent() {
  const { OpportunitiesPosts: Data } = useOpportunitiesPosts();
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();

  // Scroll to the section when the hash changes
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1)); // Remove '#' from the hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (Data === undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [Data]);

  return (
    <>
      <Navbar />

      <div className="relative h-[80vh] md:h-[80vh] overflow-hidden -mb-2">
        <Image
          src="/StaticImages/Opportunities.jpg"
          alt="Opportunities"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-top"
          loading="lazy"
          width={1920}
          height={1080}
          style={{ zIndex: -1 }}
        />

        <div className="w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center ml-0 p-2 md:ml-0 md:p-2">
          <div className="collaboration-call w-[90%] md:w-[70%] lg:w-[40%] p-4 gap-0.5 md:gap-0 md:p-9 flex flex-col items-center justify-center bg-secondary/65 bg-opacity-80 mt-9">
            <div className="icon flex align-center justify-center text-3xl">
              <div className="bg-secondary rounded-full p-3">
                <FaHandHoldingWater className="text-primary text-6xl" />
              </div>
            </div>
            <h2 className="text-tertiary text-md mt-0 md:mt-1 md:text-base">
              SCIENCE FOR IMPACT
            </h2>
            <div className="joinUs-text text-3xl font-bold p-0.5 md:p-3 text-primary my-0">
              Join the Cho Lab.
            </div>
            <p className="leading-relaxed text-justify md:text-center text-primary">
              We are building a dynamic team of undergraduate and graduate
              students, as well as postdoctoral researchers, who share a passion
              for advancing our understanding of hydrology and water resources
              in a changing climate to promote a sustainable environment. We
              value self-motivation, a collaborative spirit, and a commitment to
              collective success. Our lab fosters an inclusive and diverse
              environment where everyone is empowered to thrive and contribute
              meaningfully.
            </p>

            <div>
              <Link href="/opportunities#vacancyAnnouncement">
                <div className="bg-opacity-0 border-[2px] p-3 px-5 mt-2 font-semibold text-primary cursor-pointer hover:bg-tertiary border-tertiary duration-500">
                  HIRING NOW!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Quality />
      <MeetChoLab />

      {!isLoading && Data && Data[0].announcementStatus ? (
        <VacancyAnnouncement
          id="vacancyAnnouncement"
          Data={Data[0]}
          className=""
        />
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}

export default OpportunitiesContent;
