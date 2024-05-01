"use client"
import React from "react";
import section7 from "../../data.json";
import Image from "next/image";
import { useLanguage } from "@/config/context/LanguageContext";

const Section7 = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#F8F8F8] md:rounded-t-[70px] rounded-b-2xl rounded-t-2xl md:rounded-b-[70px]">
      <div className="mt-[4rem] md:mt-[8rem]  mb-[5rem] pt-[5rem] pb-[5rem] ">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-6 md:mx-[6rem] gap-[3rem]">
          <div>
            <h1 className="text-[#004D4A] text-[30px] md:text-[40px] font-[700]">
              {language
                ? section7.german.section7.mainheading
                : section7.english.section7.mainheading}
            </h1>
            <p className="mt-12 md:mt-6 mr-8 text-sans text-[17px]">
              {language
                ? section7.german.section7.description1
                : section7.english.section7.description1}
            </p>
            <div className="flex items-center mt-11 gap-4 font-sans">
              <Image
                src={"/images/section71.png"}
                alt="section71"
                width={300}
                height={300}
                className="w-[40px]"
              />
              <p>
                {language
                  ? section7.german.section7.feature1text
                  : section7.english.section7.feature1text}
              </p>
              <p></p>
            </div>
            <div className="flex items-center mt-8 gap-4 font-sans">
              <Image
                src={"/images/section72.png"}
                alt="section71"
                width={300}
                height={300}
                className="w-[40px]"
              />
              <p>
                {language
                  ? section7.german.section7.feature2text
                  : section7.english.section7.feature2text}
              </p>
              <p></p>
            </div>
            <div className="flex items-center mt-8 gap-4 font-sans">
              <Image
                src={"/images/section73.png"}
                alt="section71"
                width={300}
                height={300}
                className="w-[40px]"
              />
              <p>
                {language
                  ? section7.german.section7.feature3text
                  : section7.english.section7.feature3text}
              </p>
              <p></p>
            </div>
            <div className="flex items-center mt-8 gap-4 font-sans">
              <Image
                src={"/images/section74.png"}
                alt="section71"
                width={300}
                height={300}
                className="w-[40px]"
              />
              <p>
                {language
                  ? section7.german.section7.feature4text
                  : section7.english.section7.feature4text}
              </p>
              <p></p>
            </div>
          </div>
          <div>
            <Image
              src={"/images/section7image.png"}
              alt="section7"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
