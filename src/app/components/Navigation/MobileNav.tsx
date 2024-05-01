import React from "react";
import { ImCross } from "react-icons/im";
import navlinks from "../../../app/data.json";
import Link from "next/link";
import { useLanguage } from "@/config/context/LanguageContext";
interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const { language } = useLanguage();

  return (
    <div
      className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 bottom-0 top-0 bg-[#000000e0] h-[100vh] z-[1002]`}
    >
      <ImCross
        className="absolute top-[2rem] right-[1rem] w-[2rem] h-[2rem] text-white"
        onClick={closeNav}
      />
      {/* Nav Divs */}
      <div
        className={`bg-[#0ECFC6] ${navStyle} transition-all duraton-500 delay-200 pl-12 pt-[2.2rem] flex flex-col justify-start w-[50%] h-[100%]`}
      >
        {/* Nav Links */}
        <ul className="space-y-10 font-sans">
          {language
            ? (
                navlinks.german.navLinks as {
                  firstlink: string;
                  href: string;
                }[]
              ).map((link, index) => (
                <Link href={link.href} key={index}>
                  <li>
                    {link.firstlink}
                  </li>
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
    </div>
  );
};

export default MobileNav;
