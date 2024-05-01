"use client";
import React, { useState } from "react";
import Image from "next/image";
import heroheading from "../../../app/data.json";
import hero from "../../../../public/images/hero.png";
import heroimagebutton from "../../../../public/images/heroimagebutton.png";
import { useLanguage } from "@/config/context/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#0ECFC6] rounded-b-[180px] ">
      <div className="py-[5rem] md:w-full w-[96%] ml-2 md:ml-0">
        <h1 className="text-[#004D4A] md:text-[45px] text-[30px] text-center font-[700]">
          {language
            ? heroheading.german.hero.heroheading1
            : heroheading.english.hero.heroheading1}
        </h1>
        <h1 className="text-[#004D4A] md:text-[45px] text-[30px]  md:mx-0 text-center font-[700]">
          {language
            ? heroheading.german.hero.heroheading2
            : heroheading.english.hero.heroheading2}
        </h1>
        <p className="text-black text-[20px] md:mt-5 mt-8 md:mx-[16rem] text-center">
          {language
            ? heroheading.german.hero.herodescription
            : heroheading.english.hero.herodescription}
        </p>
        <button className=" px-6 py-2 sm:px-7 sm:py-3 text-[14px] sm:text-[13px] bg-[#004D4A] transition-all duration-200  rounded-full flex  text-center mx-auto mt-9 text-white hover:bg-[#003F3C]">
          {language
            ? heroheading.german.hero.herobutton
            : heroheading.english.hero.herobutton}
        </button>
      </div>
      <div className="relative">
        <Image
          src={hero}
          alt="hero"
          width={500}
          height={500}
          className="mx-auto "
        />
        <Image
          src={heroimagebutton}
          alt="hero"
          width={500}
          height={500}
          className="w-[50px] absolute top-1/2 md:left-[47.5%] left-[43.5%]"
        />
      </div>
    </div>
  );
};

export default Hero;
