import React from 'react'
import section6 from "../../data.json"
import Image from "next/image"

const Section6 = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]' id='Section6'>
        <div className='text-center '>
           <h1 className='md:text-[40px] font-[700] mx-6 text-[30px] md:mx-[11rem] lg:mx-[24rem] text-[#004D4A]'>{section6.section6.heading}</h1>
           <p className='text-[20px] font-sans mt-12 md:mt-5 px-4'>{section6.section6.description}
            </p> 
        </div>
        {/* cards */}

        <div className='w-[80%] md:w-[80%] mt-[5rem] md:mt-[3rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] relative'>
                    {/* 1st card */}
                    <div className='p-2 px-6 rounded-lg border-gray-200  border-3 border transition-all '>
                        <div className=' pb-[5rem] '>
                            
                                <h1 className=' text-[20px] font-bold pt-2'>
                                    {section6.section6.card1title}
                                    </h1>
                                <p className='text-[16px] font-sans mt-[0.15rem]'>{section6.section6.card1description}</p>
                            
                            <div className='pt-5 '>
                            <h3 className='text-[#004D4A] text-[32px] font-[700] '>{section6.section6.card1speciality}</h3>
                          <div className='font-sans pt-4'>
                            <p >{section6.section6.card1specialitydescription}</p>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card1feature1}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card1feature2}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card1feature3}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card1feature4}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card1feature5}</p>
                            </div>
                            
                          </div>
                            </div>
                        </div>
                        <button className='w-full outline outline-1 py-[0.35rem] mb-0 outline-[#0ECFC6] rounded-full'>{section6.section6.cardbutton}</button>
                    </div>



                    {/* 2nd card */}
                    <div className='rounded-lg border-[#0ECFC6]  border-[0.20rem]'>
                    <div>
                        <p className='bg-[#0ECFC6] text-center font-sans'>{section6.section6.card2top}</p>
                    </div>
                   
                    <div className='  transition-all'>
                        
                        <div className='px-6 p-2  pb-[5rem] '>
                            
                                <h1 className=' text-[20px] font-bold pt-2'>
                                    {section6.section6.card2title}
                                    </h1>
                                <p className='text-[16px] font-sans mt-[0.15rem]'>{section6.section6.card2description}</p>
                            
                            <div className='pt-5 '>
                            <h3  className='text-[#004D4A] '><span className='text-[32px] font-[700]'>$50 </span> {section6.section6.card2speciality}</h3>
                          <div className='font-sans pt-4'>
                            <p >{section6.section6.card2specialitydescription}</p>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card2feature1}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card2feature2}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card2feature3}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card2feature4}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card2feature5}</p>
                            </div>
                            
                          </div>
                            </div>
                        </div>
                        <button className='w-full  py-[0.35rem] mb-12 bg-[#0ECFC6] rounded-full'>{section6.section6.cardbutton}</button>
                    </div>
                    </div>

                    {/* 3rd card */}
                    <div className='p-2 px-6 rounded-lg  border-gray-200 border-3 border transition-all'>
                        <div className=' pb-[5rem] '>
                            
                                <h1 className=' text-[20px] font-bold pt-2'>
                                    {section6.section6.card3title}
                                    </h1>
                                <p className='text-[16px] font-sans mt-[0.15rem]'>{section6.section6.card3description}</p>
                            
                            <div className='pt-4 '>
                            <h3 className='text-[#004D4A]  '>
                                <span className='text-[32px] font-[700]'>$100</span>{section6.section6.card3speciality}</h3>
                          <div className='font-sans pt-3'>
                            <p >{section6.section6.card3specialitydescription}</p>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card3feature1}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card3feature2}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card3feature3}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card3feature4}</p>
                            </div>
                            <div className='flex pt-2 text-[14px]  gap-3 mt-2 items-center'>
                            <Image src={"/images/checkmark.png"} alt='checkmark' width={200} height={200} className='w-[20px]'/>
                            <p>{section6.section6.card3feature5}</p>
                            </div>
                            
                          </div>
                            </div>
                        </div>
                        <button className='w-full outline outline-1 py-[0.35rem] mb-4 outline-[#0ECFC6] rounded-full'>{section6.section6.cardbutton}</button>
                    </div>
                </div>
    </div>
  )
}

export default Section6