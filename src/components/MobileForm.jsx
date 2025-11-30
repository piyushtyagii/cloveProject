import React from 'react'

const MobileForm = ({isBooking}) => {
  return (
    <div className="flex flex-col justify-evenly gap-4 rounded-[20px] bg-[#FFFAF5] py-6 px-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className={`font-Figtree font-[700] ${isBooking?"text-[20px]":"text-[16px]"} text-center text-[#303030]`}>
              {isBooking?"Book an Appointment With Clove Dentist in Delhi":"Get Expert Dental Guidance in Delhi"}
              
            </h1>
            <p className={`font-Figtree font-[400] text-center text-[#474747] ${isBooking && "hidden"}`}>
              Book your free consultancy today and take the first step towards
              healthy,beautiful teeth.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <input
              type="text"
              className="bg-white rounded-full border-[1px] border-[#E9811F] px-2 py-1 outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="bg-white rounded-full border-[1px] border-[#E9811F] px-2 py-1 outline-none"
              placeholder="Mobile Number"
            />
            <div className="rounded-full w-full border-[1px] flex overflow-hidden border-[#E9811F]">
              <input
                type="text"
                className="bg-white mx-3 py-1 w-[70%] outline-none"
                placeholder="Captcha"
              />
              <span className="w-[30%] bg-[#462512] border-[1px] border-[#462512] rounded-br-full flex items-center justify-center rounded-tr-full text-white">
                1514
              </span>
            </div>
            <div className="flex font-[4px] font-Figtree items-center justify-between gap-2">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[19px] h-[19px] border-[1px] border-[#E9811F] rounded-[4px] "
              />
              <p className="text-[13px]">
                I agree to CLOVE Dental's <span className="underline"></span> and{" "}
                <span className="underline">Privacy policy</span> and consent to
                contact via phone, email, or SMS.
              </p>
            </div>
            <div className="flex items-center justify-center w-[100%]">
              <button className="flex items-center justify-center w-full py-2 text-white bg-[#E9811F] rounded-[24px] font-[14px] ">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
  )
}

export default MobileForm