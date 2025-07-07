"use client";
import React from "react";

const LinkedinPosts = () => {
  return (
    <div className="">
      <div className="my-1 scroll-none p-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-tertiary py-2 text-left justify-left">
          Follow Dr. Cho on Linkedin:{" "}
        </h2>
        <div className="w-[100%] md:w-[80%]">
          <iframe
            src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25488565"
            title="linkedin_profile"
            style={{ overflow: "hidden", scrollbarWidth: "none" }}
            className="scroll-none m-auto overflow-hidden"
            width="100%"
            height="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkedinPosts;
