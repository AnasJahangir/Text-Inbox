import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

interface Props {
  title: string
  image: string
  para : string
  
}

const Carousel = ({ title,image, para  }: Props) => {

  return (
    <div className=' p-6 rounded-lg m-3'>
    <div className=' flex justify-center items-center'>
    <div className='flex'>
      <Image src={image} alt={title} height={500} width={500} className='rounded-full w-[100px]' />
    </div>
  </div>
  <div className='flex justify-center gap-2 mt-3 items-center text-[#FBE100]'>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  <FaStar/>
  </div>
  <div className='text-[#004D4A] md:mx-[4rem] font-[700] pb-[4rem] text-[18px] font-sans text-center mt-4'>
    <p >{para}</p>
    <p className='mt-4'>{title}</p>
  </div>
  </div>
  
  )
}

export default Carousel