import React from 'react'
import mobile from '../assets/icons/mobile.png'

const Header = () => {
  return (
    <div className='w-full py-3 px-6 bg-[#FFFAF5]'>
        <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#E9811F] text-[30px] my-0 leading-none">clove <span className="text-black ">:&#41;</span>
                </h1>
                <h4 className=" text-[10px] font-bold relative right-[9px]">D E N T A L</h4>
            </div>
                <div className="">
            <div className="flex justify-evenly items-center gap-3">
                    <button className="md:flex hidden flex-col justify-center px-4 py-1 bg-[#E9811F] text-white border rounded-full">Book Appointment</button>
                <button className="flex flex-row justify-center items-center px-4 py-1 text-black border-black border-[1px] rounded-full gap-1"> <img src={mobile} alt="" className="w-[10px] h-[20px] object-cover" /><span className="">985-6589-510</span></button>
               
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header