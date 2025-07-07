"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface PublicationCardProps {
  title: string;
  details: string;
  link: string;
  imgUrl: string;
  sequence?: number;
}

export default function PublicationCard({
  title,
  details,
  link,
  imgUrl,
}: PublicationCardProps) {
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*.*?\*)/); // Split text into segments with and without *
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        // Remove * and wrap in <strong> for bold text
        return (
          <strong key={index}>
            {part.slice(1, -1)} {/* Slice to remove the asterisks */}
          </strong>
        );
      }
      return part; // Return normal text
    });
  };

  return (
    <>
      <div
        className="altmetric-embed"
        data-badge-type="donut"
        data-doi="10.1038/nature.2012.9872"
      ></div>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer"
        className="font-semibold hover:underline text-sm p-2 rounded-sm text-primary"
      >
        <div className="cursor-pointer p-2 md:p-3 lg:p-6 mb-5 border-[1px] border-gray-200 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-lg shadow-lg transition-transform transform hover:translate-y-[-5px] duration-300 flex flex-col md:flex-row w-[100%] gap-8">
          {/* Image container */}
          <div className="w-full px-9 my-2 md:w-[20%] lg:w-[10%] md:px-0 md:my-0">
            <Image
              src={imgUrl}
              alt=""
              className="w-full min-h-full object-cover rounded-lg"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
          {/* Content container */}
          <div className="flex-1 flex flex-col items-center text-center px-3 md:items-start md:text-left md:px-0">
            <p className="text-gray-900 font-semibold mb-2 text-md md:text-lg text-justify md:text-left">
              {title}
            </p>
            <p className="text-gray-700 font-normal mb-2 text-sm text-justify">
              {renderFormattedText(details)}
            </p>
            <div className="p-2 flex justify-left mb-5 md:mb-0">
              <div className="font-semibold hover:underline text-sm bg-tertiary p-2 rounded-sm text-primary">
                Link to Paper
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
