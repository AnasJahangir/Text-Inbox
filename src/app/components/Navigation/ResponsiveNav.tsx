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

import { usePathname } from "next/navigation";
const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const { language } = useLanguage();
  const [languageDrop, setLanguageDrop] = useState(false);
  const { changeLanguage } = useLanguage();
  const pathname = usePathname();
  useEffect(() => {
    setShowNav(false);
    setLanguageDrop(true);
  }, [pathname]);
  const changeLanguageBtn = (lang: string) => {
    setLanguageDrop(true);

    if (lang === "en") {
      changeLanguage(false);
    } else {
      changeLanguage(true);
    }
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-[#0ECFC6]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-1 md:px-4">
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
          <div className="flex items-center md:hidden md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            {/* <div
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
            </div> */}
            <div>
              <button
                type="button"
                className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-[#004D4A] rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-[#004d4aa7] dark:hover:text-white"
                onClick={() => {
                  setLanguageDrop(!languageDrop);
                }}
              >
                {language ? (
                  <>
                    <svg
                      className="w-5 h-5 rounded-full me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      id="flag-icon-css-de"
                      viewBox="0 0 512 512"
                    >
                      <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                      <path d="M0 0h512v170.7H0z" />
                      <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                    </svg>
                    <span>German (DE)</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5 rounded-full me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 3900 3900"
                    >
                      <path fill="#b22234" d="M0 0h7410v3900H0z" />
                      <path
                        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                        stroke="#fff"
                        strokeWidth={300}
                      />
                      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                      <g fill="#fff">
                        <g id="d">
                          <g id="c">
                            <g id="e">
                              <g id="b">
                                <path
                                  id="a"
                                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                />
                                <use xlinkHref="#a" y={420} />
                                <use xlinkHref="#a" y={840} />
                                <use xlinkHref="#a" y={1260} />
                              </g>
                              <use xlinkHref="#a" y={1680} />
                            </g>
                            <use xlinkHref="#b" x={247} y={210} />
                          </g>
                          <use xlinkHref="#c" x={494} />
                        </g>
                        <use xlinkHref="#d" x={988} />
                        <use xlinkHref="#c" x={1976} />
                        <use xlinkHref="#e" x={2470} />
                      </g>
                    </svg>
                    <span>English (US)</span>
                  </>
                )}
              </button>
              {/* Dropdown */}
              <div
                className={`z-50 ${
                  languageDrop ? "hidden" : "block absolute"
                } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#004D4A]`}
                id="language-dropdown-menu"
              >
                <ul className="py-2 font-medium" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-[#004D4A] dark:hover:text-white"
                      role="menuitem"
                      onClick={() => changeLanguageBtn("en")}
                    >
                      <div className="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5 rounded-full me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd">
                            <g strokeWidth="1pt">
                              <path
                                fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                            </g>
                            <path
                              fill="#192f5d"
                              d="M0 0h98.8v70H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"
                            />
                          </g>
                        </svg>
                        English (US)
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-[#004D4A] dark:hover:text-white"
                      role="menuitem"
                      onClick={() => changeLanguageBtn("de")}
                    >
                      <div className="inline-flex items-center">
                        <svg
                          className="h-3.5 w-3.5 rounded-full me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-de"
                          viewBox="0 0 512 512"
                        >
                          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                          <path d="M0 0h512v170.7H0z" />
                          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                        </svg>
                        German (DE)
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
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
                        onClick={() => setShowNav(false)}
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
                        onClick={() => setShowNav(false)}
                        className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:p-0 md:dark:hover:text-white-500 dark:text-[#004D4A] dark:hover:bg-[#004D4A] dark:hover:text-white md:dark:hover:bg-transparent dark:border-[#004D4A]"
                      >
                        {link.firstlink}
                      </Link>
                    </li>
                  ))}

              <div className="hidden md:block">
                <button
                  type="button"
                  className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-[#004D4A] rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-[#004d4aa7] dark:hover:text-white"
                  onClick={() => {
                    setLanguageDrop(!languageDrop);
                  }}
                >
                  {language ? (
                    <>
                      <svg
                        className="w-5 h-5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      <span>German (DE)</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5 rounded-full me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 3900 3900"
                      >
                        <path fill="#b22234" d="M0 0h7410v3900H0z" />
                        <path
                          d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                          stroke="#fff"
                          strokeWidth={300}
                        />
                        <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                        <g fill="#fff">
                          <g id="d">
                            <g id="c">
                              <g id="e">
                                <g id="b">
                                  <path
                                    id="a"
                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                  />
                                  <use xlinkHref="#a" y={420} />
                                  <use xlinkHref="#a" y={840} />
                                  <use xlinkHref="#a" y={1260} />
                                </g>
                                <use xlinkHref="#a" y={1680} />
                              </g>
                              <use xlinkHref="#b" x={247} y={210} />
                            </g>
                            <use xlinkHref="#c" x={494} />
                          </g>
                          <use xlinkHref="#d" x={988} />
                          <use xlinkHref="#c" x={1976} />
                          <use xlinkHref="#e" x={2470} />
                        </g>
                      </svg>
                      <span>English (US)</span>
                    </>
                  )}
                </button>
                {/* Dropdown */}
                <div
                  className={`z-50 ${
                    languageDrop ? "hidden" : "block absolute"
                  } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#004D4A]`}
                  id="language-dropdown-menu"
                >
                  <ul className="py-2 font-medium" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-[#004D4A] dark:hover:text-white"
                        role="menuitem"
                        onClick={() => changeLanguageBtn("en")}
                      >
                        <div className="inline-flex items-center">
                          <svg
                            aria-hidden="true"
                            className="h-3.5 w-3.5 rounded-full me-2"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-us"
                            viewBox="0 0 512 512"
                          >
                            <g fillRule="evenodd">
                              <g strokeWidth="1pt">
                                <path
                                  fill="#bd3d44"
                                  d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                                <path
                                  fill="#fff"
                                  d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                  transform="scale(3.9385)"
                                />
                              </g>
                              <path
                                fill="#192f5d"
                                d="M0 0h98.8v70H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                transform="scale(3.9385)"
                              />
                            </g>
                          </svg>
                          English (US)
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-[#004D4A] dark:hover:text-white"
                        role="menuitem"
                        onClick={() => changeLanguageBtn("de")}
                      >
                        <div className="inline-flex items-center">
                          <svg
                            className="h-3.5 w-3.5 rounded-full me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            id="flag-icon-css-de"
                            viewBox="0 0 512 512"
                          >
                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                            <path d="M0 0h512v170.7H0z" />
                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                          </svg>
                          German (DE)
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
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
