"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { Button } from "antd";
import Image from "next/image";

interface MemberCardProps {
  name: string;
  img: string;
  position: string;
  email?: string;
  linkedin?: string;
  desc: string;
  setIsModalOpen: (open: boolean) => void;
}

export default function MemberCard({
  name,
  img,
  position,
  email,
  linkedin,
  desc,
  setIsModalOpen,
}: MemberCardProps) {
  return (
    <div className="bg-[#005B96] mt-10 py-5 flex flex-col justify-center items-center border-[3px] border-gray-500 border-opacity-10 sm:border-gray-250 sm:border-[1px] sm:text-left min-h-[600px] shadow-md shadow-gray-200 sm:my-5 md:my-5">
      <div className="w-[200px] rounded-[50%] overflow-hidden bg-no-repeat bg-cover h-[200px] border-black border-[1px] flex items-center justify-center">
        <Image
          src={img}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ borderRadius: "50%" }}
          width={200}
          height={200}
        />
      </div>

      <div className="div py-5 sm:p-1 sm:w-full text-center align-middle">
        <h3 className="p-5 text-xl text-tertiary text-center font-semibold sm:text-2xl sm:px-1  sm:justify-center">
          {name}
        </h3>
        <h2 className="text-primary text-base px-1 font-semibold sm:font-thin sm:text-[1rem] px-5 text-left justify-left md:text-center md:justify-center">
          {position}
        </h2>
        <p className=" justify-center text-primary px-5 text-sm py-5  md:px-5  text-left justify-left text-wrap break-words">
          {desc}
        </p>

        <div className="flex justify-around text-4xl sm:my-5 lg:px-[3rem]">
          {email && (
            <div className="p-5 text-primary sm:p-0 sm:text-left sm:justify-left">
              <Link href={`mailto:${email}`}>
                <section className="font-bold sm:p-1">
                  <IoMail />
                </section>
              </Link>
            </div>
          )}

          {linkedin && (
            <p className="p-5 text-primary sm:px-0 sm:text-left sm:justify-left font-bold sm:p-1 break-keep">
              <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </Link>
            </p>
          )}
        </div>

        {/* View Details Button */}
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-white/10 w-[75%] border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-200 font-medium px-6 py-3 h-auto rounded-lg"
          size="middle"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
