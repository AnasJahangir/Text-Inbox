"use client";
import React from "react";
import section4 from "../../../app/data.json";
import Image from "next/image";
import { useLanguage } from "@/config/context/LanguageContext";

const Section4 = () => {
  const { language } = useLanguage();

  return (
    <div className="my-[4rem]">
      <div className="text-center">
        <h1 className=" text-[#004D4A] text-[30px] md:text-[40px] font-[700] mx-[2rem] md:mx-[12rem] lg:mx-[18rem]">
          {language
            ? section4.german.section4.mainheading
            : section4.english.section4.mainheading}
        </h1>
        <p className="text-[24px] font-sans mt-7 md:mt-4 mx-3">
          {language
            ? section4.german.section4.description
            : section4.english.section4.description}
        </p>
        <div className="w-[85%] md:w-[70%] mt-[3rem] md:mt-[3rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[3rem] relative items-center">
          {/* 1st card */}
          <div>
            <div className="font-sans py-10 px-[2rem] text-start pb-[4rem] rounded-xl shadow-2xl transition-all">
              <p className="bg-[#BAFBF8] inline">
                {language
                  ? section4.german.section4.firstcardfirstline
                  : section4.english.section4.firstcardfirstline}
              </p>
              <div className="text-[16px] mt-3">
                <p>
                  {language
                    ? section4.german.section4.firstcardfirstpara
                    : section4.english.section4.firstcardfirstpara}
                  <span className="bg-[#BAFBF8]">
                    {language
                      ? section4.german.section4
                          .firstCardFirstParaTextHighlighted
                      : section4.english.section4
                          .firstCardFirstParaTextHighlighted}
                  </span>

                  <span>
                    {" "}
                    {language
                      ? section4.german.section4.firstCardFirstParaTextRemaining
                      : section4.english.section4
                          .firstCardFirstParaTextRemaining}
                  </span>
                </p>
              </div>
              <div className="text-[16px] mt-3">
                <p>
                  {language
                    ? section4.german.section4.firstCardSecondPara
                    : section4.english.section4.firstCardSecondPara}{" "}
                  <span className="bg-[#BAFBF8]">
                    {language
                      ? section4.german.section4
                          .firstCardSecondParaTextHighlighted1
                      : section4.english.section4
                          .firstCardSecondParaTextHighlighted1}
                  </span>
                  <span>
                    {" "}
                    {language
                      ? section4.german.section4
                          .firstCardSecondParaTextRemaining1
                      : section4.english.section4
                          .firstCardSecondParaTextRemaining1}
                  </span>
                  <span className="bg-[#BAFBF8]">
                    {language
                      ? section4.german.section4
                          .firstCardSecondParaTextHighlighted2
                      : section4.english.section4
                          .firstCardSecondParaTextHighlighted2}
                  </span>
                  <span>
                    {language
                      ? section4.german.section4
                          .firstCardSecondParaTextRemaining2
                      : section4.english.section4
                          .firstCardSecondParaTextRemaining2}
                  </span>
                </p>
              </div>
              <div className="text-[16px] mt-3">
                <p>
                  <span className="bg-[#BAFBF8]">
                    {language
                      ? section4.german.section4.firstCardThirdParaHighlighted
                      : section4.english.section4.firstCardThirdParaHighlighted}
                  </span>{" "}
                  <span>
                    {language
                      ? section4.german.section4.firstCardThirdPara
                      : section4.english.section4.firstCardThirdPara}
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* 2nd card */}

          <div className="">
            <div className="font-sans pt-10 pb-10 md:pb-[4.5rem] px-[2rem] text-start  rounded-xl shadow-2xl transition-all">
              <p className="bg-gray-200 inline">
                {language
                  ? section4.german.section4.secondCardFirstLine
                  : section4.english.section4.secondCardFirstLine}
              </p>
              <div className="text-[16px] mt-3">
                <p>
                  {language
                    ? section4.german.section4.secondCardFirstPara
                    : section4.english.section4.secondCardFirstPara}
                  <span className="bg-gray-200">
                    {language
                      ? section4.german.section4.secondCardFirstParaHighlighted1
                      : section4.english.section4
                          .secondCardFirstParaHighlighted1}
                  </span>
                  <span>
                    {language
                      ? section4.german.section4.secondCardFirstParaRemaining1
                      : section4.english.section4.secondCardFirstParaRemaining1}
                  </span>
                  <span className="bg-gray-200">
                    {" "}
                    {language
                      ? section4.german.section4.secondCardFristParaHighlight2
                      : section4.english.section4.secondCardFristParaHighlight2}
                  </span>
                  <span>
                    {language
                      ? section4.german.section4.secondCardFirstParaRemaining2
                      : section4.english.section4.secondCardFirstParaRemaining2}
                  </span>
                </p>
              </div>
              <div className="text-[16px] mt-3">
                <p>
                  {language
                    ? section4.german.section4.secondCardSecondPara
                    : section4.english.section4.secondCardSecondPara}{" "}
                  <span className="bg-gray-200">
                    {language
                      ? section4.german.section4.secondCardSecondParaHighlight
                      : section4.english.section4.secondCardSecondParaHighlight}
                  </span>
                  <span>
                    {" "}
                    {language
                      ? section4.german.section4.secondCardSecondParaRemaining
                      : section4.english.section4.secondCardSecondParaRemaining}
                  </span>
                </p>
                <div className="text-[16px] mt-3">
                  <p>
                    {language
                      ? section4.german.section4.secondCardThirdPara
                      : section4.english.section4.secondCardThirdPara}
                  </p>
                </div>
              </div>
              <div className="text-[16px] mt-3">
                <p>
                  {language
                    ? section4.german.section4.secondCardFourParaLine1
                    : section4.english.section4.secondCardFourParaLine1}
                </p>
                <p className="bg-gray-200 inline mt-2">
                  {language
                    ? section4.german.section4.secondCardFourParaLine2
                    : section4.english.section4.secondCardFourParaLine2}
                </p>
              </div>
            </div>
          </div>
          <Image
            src={"/images/section4.png"}
            alt="section4"
            height={100}
            width={100}
            className="absolute and transform rotate-45 md:rotate-0  top-[50%] left-[5%] md:left-[44%] md:top-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default Section4;
