"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative mt-2 pt-[5rem]">
      <div className="py-5 bg-secondary text-primary flex flex-col justify-left relative items-center text-center p-0 md:text-left border-secondary md:p-1 pb-[5px]">
        <div className="custom-shape-divider-top-1730592413">
          <svg
            className="z-[100]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between p-1 pt-5 w-full md:py-10 md:w-[90%] border-secondary">
          <div className="Cho flex justify-center m-auto items-center w-[90%] md:w-[100%]">
            <div className="ml-0 md:ml-10 w-[70%] md:w-[80%] lg:w-[70%] p-[0.75rem] md:p-[1.5rem] aspect-square overflow-hidden h-full md:h-auto bg-white rounded-full flex justify-center items-center shadow-lg">
              <Image
                className="bg-white w-full h-full object-contain flex items-center justify-center"
                src="/ChoLabLogo.png"
                alt="Cho Lab Logo"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="contact block flex-col text-3xl text-center text-tertiary font-semibold items-center justify-start col-span-1">
            <p className="flex p-0 md:p-5 pb-2 mb-3 text-center md:text-left items-center md:items-start text-[2rem] md:text-3xl w-full my-5 justify-center md:justify-start">
              {/* <section className="border-b-[2px] border-tertiary w-full inline text-center"> */}
              Contact
              {/* </section> */}
            </p>

            <div className="address text-primary font-light text-center md:text-left md:space-y-5 ">
              <p className="p-0 md:p-2 text-tertiary py-5 text-2xl md:text-2xl my-2">
                Mailing Address:
              </p>
              <p className="p-0 md:p-2 text-xl md:text-xl py-2 md:py-0">
                Bruce and Ingram, Room 5311
              </p>
              <p className="p-0 md:p-2 text-xl md:text-xl py-2 md:py-0">
                Texas State University
              </p>
              <p className="p-0 md:p-2 text-xl md:text-xl py-2 md:py-0">
                San Marcos, Texas - 78666
              </p>
            </div>

            <div className="text-xl md:text-2xl md:text-left p-0 md:p-7 my-2 md:my-0 cursor-pointer">
              eunsang.cho@txstate.edu
            </div>

            <div className="social flex w-[100%] md:w-[50%] my-7 text-left justify-around items-center">
              <a
                href="https://github.com/echo-hydro"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl md:text-5xl" />
              </a>
              <a
                href="https://x.com/Eunsang_UNH"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="text-3xl md:text-5xl" />
              </a>
              <a
                href="mailto:eunsang.cho@txstate.edu"
                target="_blank"
                rel="noreferrer"
              >
                <IoMail className="text-3xl md:text-5xl" />
              </a>
            </div>
          </div>

          <div className="quick-links flex-col text-3xl text-center text-tertiary font-semibold flex items-center w-[100%] md:w-[100%] justify-center md:jusitfy-around col-span-1 md:col-span-2 lg:col-span-1">
            <p className="block p-5 my-5 border-b-[2px] border-tertiary pb-2 mb-7 text-2xl md:text-3xl text-center justify-center items-center">
              Quick Links
            </p>

            <div className="links text-lg md:text-xl grid grid-cols-2 md:grid-cols-3 gap-x-7 text-primary mx-auto text-center w-[100%] justify-center items-center col-span-2 md:col-span-2">
              <Link
                href="/about"
                className=" md:p-2 font-light my-2 hover:border-b-2 hover:border-tertiary transition duration-150"
              >
                PEOPLE
              </Link>
              <Link
                href="/news"
                className=" md:p-2 font-light my-2 hover:border-b-2 hover:border-tertiary transition duration-150"
              >
                LATEST NEWS
              </Link>
              <Link
                href="/publication"
                className=" md:p-2 font-light my-2 hover:border-b-2 hover:border-tertiary transition duration-150"
              >
                PUBLICATIONS
              </Link>
              <Link
                href="/research"
                className=" md:p-2 font-light my-2 hover:border-b-2 hover:border-tertiary transition duration-150"
              >
                RESEARCH
              </Link>
              <Link
                href="/opportunities"
                className=" md:p-2 font-light my-2 hover:border-b-2 hover:border-tertiary transition duration-150"
              >
                OPPORTUNITIES
              </Link>
              <Link
                href="/mentorship"
                className=" md:p-2 font-light my-2 hover:border-b-2 hover:border-tertiary transition duration-150"
              >
                MENTORSHIP
              </Link>
            </div>
          </div>
        </div>

        <div className="copyright border-t-2 text-sm md:text-xl pb-5 md:pb-0 w-[80%] md:w-full border-tertiary text-center p-3 mb-0 pt-5">
          <p>Copyright &copy; 2024 Eunsang Cho. All rights Reserved.</p>
          <Link href="https://samarranjit.com.np" target="_blank">
            <p className="pt-5 text-sm">Designed by Samar Ranjit</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
