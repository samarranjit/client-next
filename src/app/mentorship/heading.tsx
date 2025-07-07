"use client";

import React from "react";

const Heading = () => {
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(/StaticImages/AlkekLib.jpg)` }}
        className="h-[80vh] md:h-[90vh] overflow-hidden bg-scroll bg-center md:bg-fixed md:bg-top bg-cover -mb-2"
      >
        <div className="w-[100%] h-[100%] bg-opacity-15 flex items-center justify-center ml-0 p-2 md:ml-0 md:p-2">
          <div className="collaboration-call w-[90%] md:w-[60%] lg:w-[40%] p-4 gap-2 md:gap-7 md:p-10 flex flex-col items-center justify-center bg-secondary/65 bg-opacity-65">
            <p className="text-lg md:text-2xl text-tertiary text-center w-full font-semibold align-center justify-center">
              Teaching and Mentorship
            </p>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary text-center">
              Committed to equity, excellence, and growth.
            </h1>
            <p className="text-primary text-center text-lg">
              We challenge each other to grow and push the boundaries of
              science, while using transparent expectations and evidence-based
              best practices to create a classroom and lab environment that is
              welcoming to all.
            </p>
            <a href="mailto:eunsang.cho@txstate.edu">
              {/* <button className='border-primary border-2 p-5 text-primary px-7 hover:bg-primary hover:text-black duration-500'>Email Dr. Cho</button> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
