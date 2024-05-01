"use client";
import Image from "next/image";
import React from "react";
import footer from "../../data.json";
import { useLanguage } from "@/config/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#0ECFC6] md:rounded-t-[70px] rounded-t-2xl">
      <div className="pt-[5rem] pb-[2rem] text-[#004D4A] md:mx-[7rem] mx-5 ">
        <div className="grid md:grid-cols-[2fr,1fr,1fr] grid-cols-1 gap-10 md:gap-0 ">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={"/images/footerlogo.png"}
                alt="footer logo"
                width={200}
                height={200}
                className="w-[20px]"
              />
              <h2 className="text-[#004D4A] text-[20px] font-[700]">
                {language
                  ? footer.german.footer.footercol1first
                  : footer.english.footer.footercol1first}
              </h2>
            </div>
            <p className="mt-4 font-sans md:mr-48">
              {language
                ? footer.german.footer.footercol1para
                : footer.english.footer.footercol1para}
            </p>
          </div>
          <div>
            <h2 className="text-[#004D4A] text-[18px] font-[700]">
              {language
                ? footer.german.footer.footercol2first
                : footer.english.footer.footercol2first}
            </h2>
            <p className="mt-4 font-sans">Instagram</p>
            <p className="mt-2 font-sans">Facebook</p>
            <p className="mt-2 font-sans">Linked In</p>
            <p className="mt-2 font-sans">Twitter</p>
          </div>
          <div>
            <p className="text-[15px]">
              <span className="font-[600] text-[18px] ">Phone: </span>
              <span className="font-sans">+1-506-851-1343 </span>
            </p>
            <p className="text-[15px] mt-2">
              <span className="font-[600] text-[18px] "> Email</span>
              <span className="font-sans"> info@conceptomedia.ca</span>
            </p>
          </div>
        </div>
        <div className="md:flex mt-20 items-center font-sans text-[15px]">
          <p>© Copyright 2024 Email Chrome – All right reserved.</p>
          <p className="md:pl-[20rem] md:mt-0 mt-5">Privacy Policy</p>
          <p className="md:pl-[5rem] md:mt-0 mt-5">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
