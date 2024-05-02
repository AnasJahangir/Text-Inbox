"use client";
import React from "react";
import Image from "next/image";
import section2 from "../../data.json";
import { useLanguage } from "@/config/context/LanguageContext";

const Feature = () => {
  const { language } = useLanguage();

  return (
    <div className="mt-[5rem] mb-[8rem]">
      {/* top images */}
      <div>
        <div className="hidden md:flex flex-col   md:flex-row md:mx-[5rem] md:gap-[2rem] items-center justify-center">
          {/* Image 1 */}
          <div className="flex items-center justify-center md:w-[500px]">
            <Image
              src={"/images/section2first.png"}
              alt="Image 1"
              height={500}
              width={500}
              className="w-full md:w-[100px]"
            />
          </div>
          {/* Image 2 */}
          <div className="flex items-center justify-center md:w-[500px]">
            <Image
              src={"/images/section2second.png"}
              alt="Image 2"
              height={500}
              width={500}
              className="w-full md:w-[100px]"
            />
          </div>
          {/* Image 3 */}
          <div className="flex items-center justify-center md:w-[500px]">
            <Image
              src={"/images/section2third.png"}
              alt="Image 3"
              height={500}
              width={500}
              className="w-full md:w-[100px]"
            />
          </div>
          {/* Image 4 */}
          <div className="flex items-center justify-center md:w-[500px]">
            <Image
              src={"/images/section2four.png"}
              alt="Image 4"
              height={500}
              width={500}
              className="w-full md:w-[100px]"
            />
          </div>
          {/* Image 5 */}
          <div className="flex items-center justify-center md:w-[500px]">
            <Image
              src={"/images/section2five.png"}
              alt="Image 5"
              height={500}
              width={500}
              className="w-full md:w-[100px]"
            />
          </div>
        </div>

        <div className="flex md:hidden  mx-auto md:gap-[5rem] gap-6 mb-5 items-center  justify-center">
          <Image
            src={"/images/section2first.png"}
            alt="google logo"
            height={500}
            width={500}
            className="w-[100px]"
          />
          <Image
            src={"/images/section2second.png"}
            alt="google logo"
            height={500}
            width={500}
            className="w-[100px]"
          />
          <Image
            src={"/images/section2third.png"}
            alt="google logo"
            height={500}
            width={500}
            className="w-[100px]"
          />
        </div>
        <div className="flex items-center md:hidden mt-11 mx-auto justify-center gap-4 ">
          <Image
            src={"/images/section2four.png"}
            alt="google logo"
            height={500}
            width={500}
            className="w-[100px]"
          />
          <Image
            src={"/images/section2five.png"}
            alt="google logo"
            height={500}
            width={500}
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="mt-[5rem] md:mt-[8rem] text-center">
        <p className=" text-[#0ECFC6] text-[20px] font-[500]">
          {language
            ? section2.german.section2.topheading
            : section2.english.section2.topheading}
        </p>
        <h1 className="text-[#004D4A] text-[30px] sm:mx-6 md:text-[40px] font-[700] md:mx-[12rem] lg:mx-[20rem] mt-9 md:mt-3">
          {language
            ? section2.german.section2.mainheading
            : section2.english.section2.mainheading}
        </h1>
        {/* cards */}

        <div className="w-[70%] md:w-[85%] mt-[5rem] md:mt-[3rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
          {/* 1st card */}
          <div>
            <div className="p-2 pb-[5rem] hover:bg-white rounded-lg hover:shadow-2xl transition-all">
              {/* Background Container */}
              <div className="bg-[#0ECFC6] bg-opacity-20 w-[20%] h-[40px] flex items-center justify-center mx-auto rounded-xl">
                {/* Inner Text */}
                <div className="text-[#0ECFC6] opacity-100 text-[20px] font-bold">
                  1
                </div>
              </div>
              {/* Heading */}
              <h1 className="mt-[1.5rem] font-semibold text-[#004D4A] text-center text-[20px]">
                {language
                  ? section2.german.section2.firstcardheading
                  : section2.english.section2.firstcardheading}
              </h1>
              {/* Description */}
              <p className="text-center opacity-60 text-black  mt-[1rem] text-[14px]">
                {language
                  ? section2.german.section2.firstcarddescription
                  : section2.english.section2.firstcarddescription}
              </p>
            </div>
          </div>

          {/* 2nd card */}
          <div>
            <div className="p-6 pb-[4rem]  rounded-xl hover:shadow-2xl transition-all">
              {/* Background Container */}
              <div className="bg-[#0ECFC6] bg-opacity-20 w-[20%] h-[40px] flex items-center justify-center mx-auto rounded-xl">
                {/* Inner Text */}
                <div className="text-[#0ECFC6] opacity-100 text-[20px] font-bold">
                  2
                </div>
              </div>
              {/* Heading */}
              <h1 className="mt-[1.5rem] font-semibold text-[#004D4A] text-center text-[20px]">
                {language
                  ? section2.german.section2.secondcardheading
                  : section2.english.section2.secondcardheading}
              </h1>
              {/* Description */}
              <p className="text-center text-black opacity-60 mt-[1rem] text-[14px]">
                {language
                  ? section2.german.section2.secondcarddescription
                  : section2.german.section2.secondcarddescription}
              </p>
            </div>
          </div>

          {/* 3rd card */}
          <div>
            <div className="p-6 hover:bg-white rounded-lg hover:shadow-2xl transition-all">
              {/* Background Container */}
              <div className="bg-[#0ECFC6] bg-opacity-20 w-[20%] h-[40px] flex items-center justify-center mx-auto rounded-xl">
                {/* Inner Text */}
                <div className="text-[#0ECFC6] opacity-100 text-[20px] font-bold">
                  3
                </div>
              </div>
              {/* Heading */}
              <h1 className="mt-[1.5rem] font-semibold text-[#004D4A] text-center text-[20px]">
                {language
                  ? section2.german.section2.thirdcardheading
                  : section2.english.section2.thirdcardheading}
              </h1>
              {/* Description */}
              <p className="text-center text-black opacity-60 mt-[1rem] text-[14px]">
                {language
                  ? section2.german.section2.thirdcarddescription
                  : section2.english.section2.thirdcarddescription}
              </p>
            </div>
          </div>
        </div>
        <button className=" px-8 py-3 sm:px-8 sm:py-5 text-[14px] sm:text-[13px] hover:bg-[#003F3C] bg-[#004D4A] transition-all duration-200  rounded-full flex  text-center mx-auto mt-9 text-white">
          {language
            ? section2.german.section2.section2button
            : section2.english.section2.section2button}
        </button>
      </div>
    </div>
  );
};

export default Feature;
