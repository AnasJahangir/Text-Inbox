import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import { RiMenu5Line } from "react-icons/ri";
import navlinks from "../../../app/data.json";
import heading from "../../../app/data.json";
import navbutton from "../../../app/data.json";
import us from "../../../../public/images/us.png";
import de from "../../../../public/images/de.png";

import downarrow from "../../../../public/images/downarrow.png";
import Link from "next/link";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { useLanguage } from "@/config/context/LanguageContext";
interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [languageDrop, setLanguageDrop] = useState(false);
  const { changeLanguage } = useLanguage();
  const { language } = useLanguage();

  const changeLanguageBtn = () => {
    setLanguageDrop(!language);
    changeLanguage(!language);
  };
  return (
    <div className="h-[70px] md:h-[100px] bg-[#0ECFC6]">
      <div className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between ">
        {/* logo design */}
        <div className="flex items-center md:ml-24 ml-5  md:space-x-4 space-x-2">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
          />
          <h1 className="text-[20px] sm:text-[30px] font-bold text-[#004D4A] block ">
            {language
              ? heading.german.heading.name
              : heading.english.heading.name}
          </h1>
        </div>
        <div className="flex items-center  md:gap-12">
          {/* Nav Links */}
          <div className="hidden md:block text-black font-sans">
            <ul className="flex gap-6">
              {language
                ? (
                    navlinks.german.navLinks as {
                      firstlink: string;
                      href: string;
                    }[]
                  ).map((link, index) => (
                    <Link href={link.href} key={index}>
                      <li>{link.firstlink}</li>
                    </Link>
                  ))
                : (
                    navlinks.english.navLinks as {
                      firstlink: string;
                      href: string;
                    }[]
                  ).map((link, index) => (
                    <Link href={link.href} key={index}>
                      <li>{link.firstlink}</li>
                    </Link>
                  ))}
            </ul>
          </div>
          <div
            className="relative"
            onClick={() => {
              setLanguageDrop(!languageDrop);
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                src={language ? de : us}
                alt="country"
                height={500}
                width={500}
                className="w-[25px]"
              />

              {languageDrop ? <RxCaretUp /> : <RxCaretDown />}
            </div>
            {languageDrop && (
              <div className="dropdownflag" onClick={changeLanguageBtn}>
                <Image
                  src={language ? us : de}
                  alt="country"
                  height={500}
                  width={500}
                  className="w-[25px]"
                />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-6 py-2 sm:px-6 sm:py-2 text-[14px] sm:text-[13px] bg-[#004D4A] transition-all duration-200  rounded-full item-center space-x-2 text-white hover:bg-[#003F3C]">
              {language
                ? navbutton.german.navbutton.button
                : navbutton.english.navbutton.button}
            </button>

            <RiMenu5Line
              onClick={openNav}
              className="lg:hidden h-[2rem] w-[2rem] text-[#004D4A]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
