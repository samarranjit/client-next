"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

interface NewsCardProps {
  prop: {
    _id: string;
    heading: string;
    body: string[];
    mainImage: string;
    date: string;
  };
}

function NewsCard({ prop }: NewsCardProps) {
  const { _id, heading, body, mainImage, date } = prop;
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/news/${_id}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className="bg-primary/10 shadow-md shadow-gray-400 justify-center items-center rounded-[12px] relative md:min-h-[500px] md:max-h-[800px] border-t-9 border-tertiary/75 hover:border-secondary/75 transition duration-250 ease-in-out">
        <div className="w-[100%] overflow-hidden rounded-t-[12px] h-[300px] bg-center ">
          <img
            src={mainImage}
            alt={heading}
            loading="lazy"
            className="w-full h-full object-cover rounded-t-[12px] "
            style={{ display: "block" }}
            width={1920}
            height={1080}
          />
        </div>
        <div className="my-5 md:my-2 p-4 md:p-2 items-left md:min-h-[400px] justify-evenly flex flex-col">
          <h3 className="px-0 pb-2 md:p-2 text-xl md:text-2xl items-center align-middle justify-center text-secondary font-semibold">
            {heading}
          </h3>
          <p className="p-0 md:px-2 md:py-0 md:pt-2 text-gray-400 text-left align-baseline">
            Date: {date}
          </p>
          <div className="px-0 pb-2 md:px-2 justify-center">
            <ReactMarkdown>
              {body[0]?.length > 150
                ? body[0].substring(0, 150) + "..."
                : body[0]}
            </ReactMarkdown>
          </div>
          <button
            className="my-5 border-tertiary border-[2px] px-5 py-4 rounded-[10px] w-[50%] md:w-[70%] p-2 md:p-auto flex items-center mx-auto justify-center text-center font-semibold bg-tertiary text-primary text-sm md:text-xl border-b-[5px] hover:text-tertiary hover:bg-primary hover:border-b-[5px] transition duration-500 cursor-pointer"
            onClick={handleReadMore}
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
