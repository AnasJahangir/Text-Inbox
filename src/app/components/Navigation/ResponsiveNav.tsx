"use client";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/config/context/LanguageContext";
import navlinks from "../../../app/data.json";
import heading from "../../../app/data.json";
import navbutton from "../../../app/data.json";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import us from "../../../../public/images/us.png";
import de from "../../../../public/images/de.png";
import { RiMenu5Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const { language } = useLanguage();
  const [languageDrop, setLanguageDrop] = useState(false);
  const { changeLanguage } = useLanguage();
  const pathname = usePathname();
  useEffect(() => {
    setShowNav(false);
  }, [pathname]);
  const changeLanguageBtn = () => {
    setLanguageDrop(!language);
    changeLanguage(!language);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-[#0ECFC6]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
          <div className="flex justify-between items-center ">
            <div
              className="relative"
              onClick={() => {
                setLanguageDrop(!languageDrop);
              }}
            >
              <div className="flex items-center gap-2 md:hidden">
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
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-black dark:text-[#004D4A] dark:hover:bg-white-700 dark:focus:ring-[#004D4A]"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => {
                setShowNav(!showNav);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              !showNav ? "hidden" : ""
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <ul className="flex md:items-center flex-col p-4 md:p-0 mt-4 font-medium border border-[#004D4A] rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#0ECFC6] md:dark:bg-[#0ECFC6] dark:border-white-700">
              {language
                ? (
                    navlinks.german.navLinks as {
                      firstlink: string;
                      href: string;
                    }[]
                  ).map((link, index) => (
                    <li>
                      <Link
                        href={link.href}
                        key={index}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 md:dark:hover:text-white-500 dark:text-[#004D4A] dark:hover:bg-[#004D4A] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#004D4A]"
                      >
                        {link.firstlink}
                      </Link>
                    </li>
                  ))
                : (
                    navlinks.english.navLinks as {
                      firstlink: string;
                      href: string;
                    }[]
                  ).map((link, index) => (
                    <li>
                      <Link
                        href={link.href}
                        key={index}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 md:dark:hover:text-white-500 dark:text-[#004D4A] dark:hover:bg-[#004D4A] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#004D4A]"
                      >
                        {link.firstlink}
                      </Link>
                    </li>
                  ))}

              <li className="hidden md:block">
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
              </li>
              <li>
                <div className="flex items-center space-x-4">
                  <button className="hidden sm:block px-6 py-2 sm:px-6 sm:py-2 text-[14px] sm:text-[13px] bg-[#004D4A] transition-all duration-200  rounded-full item-center space-x-2 text-white hover:bg-[#003F3C]">
                    {language
                      ? navbutton.german.navbutton.button
                      : navbutton.english.navbutton.button}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
