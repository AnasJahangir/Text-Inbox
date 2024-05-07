"use client";
import React, { useState } from "react";
import section6 from "../../app/data.json";
import Image from "next/image";
import { useLanguage } from "@/config/context/LanguageContext";
import { useRouter, useSearchParams } from "next/navigation";

const Laoder = () => {
  return (
    <>
      <svg
        aria-hidden="true"
        role="status"
        className="inline w-4 h-4 me-3 text-white animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="#E5E7EB"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

const Section6 = () => {
  const sParams = useSearchParams();
  const email = sParams.get("email");
  const { language } = useLanguage();
  const [basic, setBasic] = useState(true);
  const [pre, setPre] = useState(true);
  const [pro, setPro] = useState(true);

  const checkOut = async (subs: string) => {
    if (subs === "PRO") {
      setBasic(false);
    }
    if (subs === "ELITE") {
      setPre(false);
    }
    if (subs === "PRO") {
      setPro(false);
    }
    fetch(
      `https://hybjk3i3z6.execute-api.eu-central-1.amazonaws.com/subscription/checkout?plan=${subs}&email=${email}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "k0JA~3JfM.IEgmtaR6bzGjiZvGtzH2RC",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        window.open(data.url, "_blank");

        if (subs === "PRO") {
          setBasic(true);
        }
        if (subs === "ELITE") {
          setPre(true);
        }
        if (subs === "PRO") {
          setPro(true);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setPro(true);
        setPre(true);
        setBasic(true);
      });
  };

  return (
    <div className="mt-[5rem] mb-[3rem]" id="Section6">
      <div className="text-center ">
        <h1 className="md:text-[40px] font-[700] mx-6 text-[30px] md:mx-[11rem] lg:mx-[24rem] text-[#004D4A]">
          {language
            ? section6.german.section6.heading
            : section6.english.section6.heading}
        </h1>
        <p className="text-[20px] font-sans mt-12 md:mt-5 px-4">
          {language
            ? section6.german.section6.description
            : section6.english.section6.description}
        </p>
      </div>
      {/* cards */}

      <div className="w-[80%] md:w-[80%] mt-[5rem] md:mt-[3rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] relative">
        {/* 1st card */}
        <div className="p-2 px-6 rounded-lg border-gray-200  border-3 border transition-all ">
          <div className=" pb-[5rem] ">
            <h1 className=" text-[20px] font-bold pt-2">
              {language
                ? section6.german.section6.card1title
                : section6.english.section6.card1title}
            </h1>
            <p className="text-[16px] font-sans mt-[0.15rem]">
              {language
                ? section6.german.section6.card1description
                : section6.english.section6.card1description}
            </p>

            <div className="pt-5 ">
              <h3 className="text-[#004D4A] text-[32px] font-[700] ">
                {language
                  ? section6.german.section6.card1speciality
                  : section6.english.section6.card1speciality}
              </h3>
              <div className="font-sans pt-4">
                <p>
                  {language
                    ? section6.german.section6.card1specialitydescription
                    : section6.english.section6.card1specialitydescription}
                </p>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card1feature1
                      : section6.english.section6.card1feature1}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card1feature2
                      : section6.english.section6.card1feature2}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card1feature3
                      : section6.english.section6.card1feature3}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card1feature4
                      : section6.english.section6.card1feature4}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card1feature5
                      : section6.english.section6.card1feature5}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => checkOut("PRO")}
            className="w-full outline hover:bg-[#0AAFA6] outline-1 py-[0.35rem] mb-0 outline-[#0ECFC6] rounded-full"
          >
            {language ? (
              basic === false ? (
                <Laoder />
              ) : (
                section6.german.section6.cardbutton
              )
            ) : basic === false ? (
              <Laoder />
            ) : (
              section6.english.section6.cardbutton
            )}
          </button>
        </div>

        {/* 2nd card */}
        <div className="rounded-lg border-[#0ECFC6]  border-[0.20rem]">
          <div>
            <p className="bg-[#0ECFC6] text-center font-sans">
              {language
                ? section6.german.section6.card2top
                : section6.english.section6.card2top}
            </p>
          </div>

          <div className="  transition-all">
            <div className="px-6 p-2  pb-[5rem] ">
              <h1 className=" text-[20px] font-bold pt-2">
                {language
                  ? section6.german.section6.card2title
                  : section6.english.section6.card2title}
              </h1>
              <p className="text-[16px] font-sans mt-[0.15rem]">
                {language
                  ? section6.german.section6.card2description
                  : section6.english.section6.card2description}
              </p>

              <div className="pt-5 ">
                <h3 className="text-[#004D4A] ">
                  <span className="text-[32px] font-[700]">$50 </span>{" "}
                  {language
                    ? section6.german.section6.card2speciality
                    : section6.english.section6.card2speciality}
                </h3>
                <div className="font-sans pt-4">
                  <p>
                    {language
                      ? section6.german.section6.card2specialitydescription
                      : section6.english.section6.card2specialitydescription}
                  </p>
                  <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                    <Image
                      src={"/images/checkmark.png"}
                      alt="checkmark"
                      width={200}
                      height={200}
                      className="w-[20px]"
                    />
                    <p>
                      {language
                        ? section6.german.section6.card2feature1
                        : section6.english.section6.card2feature1}
                    </p>
                  </div>
                  <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                    <Image
                      src={"/images/checkmark.png"}
                      alt="checkmark"
                      width={200}
                      height={200}
                      className="w-[20px]"
                    />
                    <p>
                      {language
                        ? section6.german.section6.card2feature2
                        : section6.english.section6.card2feature2}
                    </p>
                  </div>
                  <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                    <Image
                      src={"/images/checkmark.png"}
                      alt="checkmark"
                      width={200}
                      height={200}
                      className="w-[20px]"
                    />
                    <p>
                      {language
                        ? section6.german.section6.card2feature3
                        : section6.english.section6.card2feature3}
                    </p>
                  </div>
                  <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                    <Image
                      src={"/images/checkmark.png"}
                      alt="checkmark"
                      width={200}
                      height={200}
                      className="w-[20px]"
                    />
                    <p>
                      {language
                        ? section6.german.section6.card2feature4
                        : section6.english.section6.card2feature4}
                    </p>
                  </div>
                  <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                    <Image
                      src={"/images/checkmark.png"}
                      alt="checkmark"
                      width={200}
                      height={200}
                      className="w-[20px]"
                    />
                    <p>
                      {language
                        ? section6.german.section6.card2feature5
                        : section6.english.section6.card2feature5}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => checkOut("ELITE")}
              className="w-[80%] mx-auto ml-6 hover:bg-[#0AAFA6]  py-[0.35rem] mb-12 bg-[#0ECFC6] rounded-full"
            >
              {language ? (
                pre === false ? (
                  <Laoder />
                ) : (
                  section6.german.section6.cardbutton
                )
              ) : pre === false ? (
                <Laoder />
              ) : (
                section6.english.section6.cardbutton
              )}
            </button>
          </div>
        </div>

        {/* 3rd card */}
        <div className="p-2 px-6 rounded-lg  border-gray-200 border-3 border transition-all">
          <div className=" pb-[5rem] ">
            <h1 className=" text-[20px] font-bold pt-2">
              {language
                ? section6.german.section6.card3title
                : section6.english.section6.card3title}
            </h1>
            <p className="text-[16px] font-sans mt-[0.15rem]">
              {language
                ? section6.german.section6.card3description
                : section6.english.section6.card3description}
            </p>

            <div className="pt-4 ">
              <h3 className="text-[#004D4A]  ">
                <span className="text-[32px] font-[700]">$100</span>
                {language
                  ? section6.german.section6.card3speciality
                  : section6.english.section6.card3speciality}
              </h3>
              <div className="font-sans pt-3">
                <p>
                  {language
                    ? section6.german.section6.card3specialitydescription
                    : section6.english.section6.card3specialitydescription}
                </p>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card3feature1
                      : section6.english.section6.card3feature1}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card3feature2
                      : section6.english.section6.card3feature2}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card3feature3
                      : section6.english.section6.card3feature3}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card3feature4
                      : section6.english.section6.card3feature4}
                  </p>
                </div>
                <div className="flex pt-2 text-[14px]  gap-3 mt-2 items-center">
                  <Image
                    src={"/images/checkmark.png"}
                    alt="checkmark"
                    width={200}
                    height={200}
                    className="w-[20px]"
                  />
                  <p>
                    {language
                      ? section6.german.section6.card3feature5
                      : section6.english.section6.card3feature5}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => checkOut("PRO")}
            className="w-full outline outline-1 py-[0.35rem] hover:bg-[#0AAFA6] mb-4 outline-[#0ECFC6] rounded-full"
          >
            {language ? (
              pro === false ? (
                <Laoder />
              ) : (
                section6.german.section6.cardbutton
              )
            ) : pro === false ? (
              <Laoder />
            ) : (
              section6.english.section6.cardbutton
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section6;
