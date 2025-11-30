import React from 'react'

const Booking = () => {
  return (
    <div className="hidden md:block md:px-[120px] py-[40px]">
        <div className="flex flex-col gap-[20px] rounded-[10px] bg-[#FFF9F4] py-3">
            <h1 className="font-Figtree font-[700] text-[24px] text-center leading-[130%] text-[#303030]">Book an Appointment With Clove Dentist in Delhi</h1>
            <div className="w-full flex flex-row gap-[24px] justify-between px-2">
                <input
              type="text"
              className=" flex-1 bg-white rounded-full border-[1px] border-[#FFE0C4] px-2 py-1 outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className=" flex-1 bg-white rounded-full border-[1px] border-[#FFE0C4] px-2 py-1 outline-none"
              placeholder="Mobile Number"
            />
            <div className=" flex-1 rounded-full w-full border-[1px] flex overflow-hidden border-[#FFE0C4]">
              <input
                type="text"
                className="bg-white mx-3 py-1 w-[70%] outline-none"
                placeholder="Captcha"
              />
              <span className="w-[30%] bg-[#462512] border-[1px] border-[#462512] rounded-br-full flex items-center justify-center rounded-tr-full text-white">
                1514
              </span>
            </div>
            </div>
            <div className="flex flex-row gap-[24px] justify-end items-end">
                <h2 className="font-Figtree font-[400] text-[12px] leading-[130%] text-right"> I agree to CLOVE Dental's <span className="underline"></span> and{" "}
                <span className="underline">Privacy policy</span> and consent to
                contact via phone, email, or SMS.</h2>
                 <button className="flex items-center justify-center w-fit py-2 px-[16px] text-white bg-[#E9811F] rounded-[24px] font-[14px] ">
                Book a Free Consultation
              </button>
            </div>
        </div>
    </div>
  )
}

export default Booking