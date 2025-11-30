import React from "react";
import discountPlan from "../assets/misc/discountPlan.png";
const DiscountPlan = () => {
  return (
    <div className="md:px-[60px] px-[22px] py-[40px]">
      <div className="flex flex-col md:flex-row gap-[60px]">
        <div className="flex flex-col gap-[24px] md:gap-[20px] rounded-[20px] py-[24px] px-[40px] border-[1px] bg-[#FFF9F4] border-[#FFE0C4]">
          <div className="flex flex-col gap-[8px]">
            <h1 className="font-Figtree font-[700] text-center md:text-left text-[20px] md:text-[24] text-[#303030]">
              Expert Guidance for Healthy Smiles
            </h1>
            <p className="font-Figtree font-[400] text-center md:text-left text-[16px] md:text-[14px] leading-[130%] text-[#474747]">
              Book your free consultancy today and take the first step towards
              healthy,beautiful teeth.
            </p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[16px]">
              <input
                type="text"
                className="bg-white rounded-full border-[1px] border-[#FFF9F4] px-2 py-1 outline-none"
                placeholder="Name"
              />
              <input
                type="text"
                className="bg-white rounded-full border-[1px] border-[#FFF9F4] px-2 py-1 outline-none"
                placeholder="Mobile Number"
              />
            </div>
            <div className="flex font-[4px] font-Figtree items-center justify-between gap-[8px]">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-[19px] h-[19px] border-[1px] border-[#FFF9F4] rounded-[4px] "
              />
              <p className="text-[12px] text-[#303030] leading-[130%]">
                I agree to CLOVE Dental's <span className="underline"></span>{" "}
                and <span className="underline">Privacy policy</span> and
                consent to contact via phone, email, or SMS.
              </p>
            </div>
            <div className="flex items-center justify-center w-[100%]">
              <button className="flex items-center justify-center w-full py-2 text-white bg-[#E9811F] rounded-[24px] font-[14px] ">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-0 border-[1px] border-[#FFE0C4] overflow-hidden rounded-[20px]">
          <img
            src={discountPlan}
            alt=""
            className="w-[399px] h-[345px] overflow-cover object-contain"
          />
          <div className="flex flex-col w-auto gap-[15px] md:justify-between py-[16px] px-[20px]">
            <h1 className="font-Figtree font-[700] text-[20px] leading-[100%] text-[#303030]">
              Dental Health Plan-Anniversary Plan
            </h1>
            <div className="flex flex-col justify-between font-Figtree font-[400] text-[16px] leading-[130%] text-[#474747]">
              <h3 className="">
                {" "}
                • ₹1,700 treatment voucher redeemable against any dental
                procedure.
              </h3>
              <h3 className="">
                {" "}
                • ₹1,000 additional voucher for any treatment (Only one voucher
                can be used per bill).
              </h3>
              <h3 className="">
                {" "}
                • Unlimited dental consultations and 2D X-rays for an entire
                year.
              </h3>
            </div>
            <div className="flex flex-col gap-[10px] md:flex-row md:justify-between">
              <div className="flex flex-col gap-[4px] w-auto">
                <h2 className="font-Figtree font-[600] text-[14px] leading-[130%] text-[#F58420]">
                  Special Offer
                </h2>
                <div className="flex flex-row gap-[15px]">
                  <h1 className="font-Figtree font-[700] text-[20px] leading-[100%] text-[#1A1A1A]">
                    ₹ 399
                  </h1>
                  <p className="font-Figtree font-[400] line-through text-[20px] leading-[100%] text-[#303030]">
                    ₹ 5100
                  </p>
                </div>
              </div>
              <button className="flex items-center justify-center px-[40px] py-[8px] text-white font-Figtree text-[14px] bg-[#F58420] rounded-[24px] font-[14px] ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPlan;
