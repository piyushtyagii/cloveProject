import React from 'react'
import mobile from '../assets/icons/mobile.png'
import book from '../assets/icons/book.png'
const Footer = () => {
  return (
    <>
    <div className="hidden md:block bg-[#462512] w-full h-[149px] px-[60px] py-[20px]">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center w-[174px] h-[68px]">
                <h1 className="text-[#E9811F] text-[50px] my-0 leading-none">clove <span className="text-black ">:&#41;</span>
                </h1>
                <h4 className=" text-[20px] font-bold relative right-[9px]">D E N T A L</h4>
            </div>
            <div className='flex flex-col gap-[24px] font-Figtree font-[400] text-[16px] leading-[150%] text-[#FFFFFF]'>
                <div className="flex flex-row justify-end gap-[27px]">
                    <h3 className="font-Figtree font-[400] text-[16px] leading-[150%] text-[#FFFFFF]">Privacy Policy</h3>
                    <h3>Terms of Sevice</h3>
                    <h3 className="hidden md:inline">Accessibility</h3>
                </div>
                <div className='flex flex-row justify-end w-[837px] h-[1px] rounded-[10px] bg-[#FFFFFF]'></div>
                <div className='flex flex-row justify-end'>
                    <h3>All Rights Reserved - 2024, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited). Managed By Unbund</h3>
                </div>
            </div>
        </div>
    </div>
     <div className="block md:hidden bg-[#462512] w-full h-auto px-[32px] py-[16px]">
        <div className='flex flex-col gap-[24px]'>
            
       
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center w-[174px] h-[68px]">
                <h1 className="text-[#E9811F] text-[40px] my-0 leading-none">clove <span className="text-[#FFFFFF] ">:&#41;</span>
                </h1>
                <h4 className=" text-[20px] font-bold relative right-[9px]">D E N T A L</h4>
            </div>
            <div className="flex flex-row">
                    <h3 className="font-Figtree font-[400] text-[16px] leading-[150%] text-[#FFFFFF]">Privacy Policy</h3>
                    <h3 className="font-Figtree font-[400] text-[16px] leading-[150%] text-[#FFFFFF]">Terms of Sevice</h3>
                </div>
            
        </div> 
        <div className='flex flex-col gap-[24px] font-Figtree font-[400] text-[16px] leading-[150%] text-[#FFFFFF]'>
                
                <div className='flex flex-row justify-end w-full h-[1px] rounded-[10px] bg-[#FFFFFF]'></div>
                <div className='flex flex-row text-center'>
                    <h3>All Rights Reserved - 2024, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited). Managed By Unbund</h3>
                </div>
            </div>
        </div>
       
    </div>
     <div className="md:hidden m-[5px] flex flex-row justify-between border-[1px] border-[#FFE0C4] bg-[#FFF1E6] rounded-tl-[20px] rounded-tr-[20px] py-[16px] px-[40px]">
            <div className="flex flex-col justify-center items-center">
                <img src={book} alt="" className="w-[8px] h-[8px] object-contain"/>
                <h2 className="font-Figtree font-[600] text-[13px] leading-[130%] text-[#4D2C19]">Book Appointment</h2>
            </div>
<           div className="h-[40px] w-[1px] bg-[FFE0C4]"></div>
            <div className="flex flex-col justify-center items-center">
                <img src={mobile} alt="" className="w-[12px] h-[12px] object-contain"/>
                <h2 className="font-Figtree font-[600] text-[13px] leading-[130%] text-[#4D2C19]">Instant Callback</h2>
            </div>
        </div>
    </>
  )
}

export default Footer