"use client";
import React from "react";
import section8 from "../../data.json";
import { useLanguage } from "@/config/context/LanguageContext";

const Section8 = () => {
  const { language } = useLanguage();

  return (
    <div id="Section8">
      <div className="mt-[5rem] mb-[5rem]">
        <h1 className="text-[30px] md:text-[40px] text-[#004D4A] font-[700] text-center md:mx-[9rem] lg:mx-[19rem]">
          {language
            ? section8.german.section8.mainheading
            : section8.english.section8.mainheading}
        </h1>
        <div className="mx-6 md:mx-[12rem] mt-[3rem] ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans">
            <input
              type="text"
              placeholder={
                language
                  ? section8.german.section8.input1
                  : section8.english.section8.input1
              }
              className="border-b placeholder-opacity-[100%] placeholder-black pb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder={
                language
                  ? section8.german.section8.input2
                  : section8.english.section8.input2
              }
              className="border-b placeholder-opacity-[100%] placeholder-black pb-2 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans mt-[3rem]">
            <input
              type="text"
              placeholder={
                language
                  ? section8.german.section8.input3
                  : section8.english.section8.input3
              }
              className="border-b placeholder-opacity-[100%] placeholder-black pb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder={
                language
                  ? section8.german.section8.input4
                  : section8.english.section8.input4
              }
              className="border-b placeholder-opacity-[100%] placeholder-black pb-2 focus:outline-none"
            />
          </div>
          <div className="mt-[3rem] font-sans">
            <textarea
              name=""
              id=""
              cols={30}
              rows={5}
              placeholder={
                language
                  ? section8.german.section8.input5
                  : section8.english.section8.input5
              }
              className="border-b placeholder-opacity-[100%] placeholder-black pb-2 w-[100%] focus:outline-none"
            ></textarea>
          </div>
          <button></button>
        </div>
        <button className="bg-[#0ECFC6] rounded-full text-center ml-8 md:ml-[23.5rem] lg:ml-[33rem] mt-8 w-[80%] py-3 md:py-2 md:w-[15%]">
          {language
            ? section8.german.section8.button
            : section8.english.section8.button}
        </button>
      </div>
    </div>
  );
};

export default Section8;
