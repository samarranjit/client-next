"use client";

import React from "react";
import { GiTalk } from "react-icons/gi";
import { PiFediverseLogoFill } from "react-icons/pi";
import { ImFlickr2 } from "react-icons/im";

const CoreValues = () => {
  return (
    <div className="themes bg-secondary h-full p-8 pb-10 md:px-5">
      <div className="title text-center text-tertiary font-semibold text-3xl my-5 mb-0">
        Themes in Our Work
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 md:px-0 lg:p-10 text-center gap-1 md:gap-5 lg:gap-10">
        {/* Equity & Inclusion */}
        <div className="flex w-[100%] justify-center items-center text-center text-primary">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
              <ImFlickr2 />
            </div>
            <div className="my-4 text-2xl mb-5">Equity & Inclusion</div>
            <h2 className="text-center p-3">
              We welcome individuals from all backgrounds and uphold policies
              that ensure a safe and inclusive lab culture. We are committed to
              actively addressing systemic inequities within scientific
              institutions.
            </h2>
          </div>
        </div>

        {/* Diverse Skills & Collaborative Mindset */}
        <div className="flex w-[100%] justify-center items-center text-center text-primary">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
              <PiFediverseLogoFill />
            </div>
            <div className="my-4 text-2xl mb-5">
              Diverse Skills & Collaborative Mindset
            </div>
            <h2 className="text-center p-3">
              Addressing complex water challenges requires diverse expertise and
              perspectives. Our team combines strengths in hydrology, remote
              sensing, data science, and modeling to drive innovative,
              multidisciplinary solutions
            </h2>
          </div>
        </div>

        {/* Transparency & Communication */}
        <div className="flex w-[100%] justify-center items-center text-center text-primary">
          <div className="flex justify-center items-center flex-col">
            <div className="bg-tertiary p-4 my-5 text-secondary text-4xl rounded-full">
              <GiTalk />
            </div>
            <div className="my-4 text-2xl mb-5">
              Transparency & Communication
            </div>
            <h2 className="text-center p-3">
              We emphasize clear expectations for all lab members, including the
              PI, and promote open communication to foster a supportive and
              productive environment.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
