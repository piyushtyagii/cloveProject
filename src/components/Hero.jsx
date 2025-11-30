import React from "react";
import img from "../assets/icons/Vector.png";
import hero from "../assets/misc/hero.jpg";

import icon2 from "../assets/icons/icon2.png";

import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import men from "../assets/misc/men.png";
import phonelogo1 from "../assets/logos/phonelogo1.png";
import phonelogo2 from "../assets/logos/phonelogo2.png";
import phonelogo3 from "../assets/logos/phonelogo3.png";

const arr = [
  {
    img: img,
    textOrange: "600+",
    textBlack: "Clinics",
  },
  {
    img: icon2,
    textOrange: "1300+",
    textBlack: "Dentists",
  },
  {
    img: icon3,
    textOrange: "30L+",
    textBlack: "Happy Patients",
  },

  {
    img: icon4,
    textOrange: "35K+",
    textBlack: "Ortho Cases",
  },
  {
    img: icon5,
    textOrange: "55K+",
    textBlack: "Implants Placed",
  },

  {
    img: img,
    textOrange: "600+",
    textBlack: "Clinics",
  },
  {
    img: icon2,
    textOrange: "1300+",
    textBlack: "Dentists",
  },
  {
    img: icon3,
    textOrange: "30L+",
    textBlack: "Happy Patients",
  },

  {
    img: icon4,
    textOrange: "35K+",
    textBlack: "Ortho Cases",
  },
  {
    img: icon5,
    textOrange: "55K+",
    textBlack: "Implants Placed",
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex">
        <div className="w-[100%] md:w-[70%]">
          <div className="w-full relative overflow-hidden">
            <div className="absolute right-0 top-0 z-20 md:hidden bg-white/60 rounded-bl-lg flex flex-row justify-center items-center py-2 px-2 gap-2">
              <img src={phonelogo1} alt="" className="w-[52px] h-[23px] object-cover" />
              <img src={phonelogo2} alt="" className="w-[64px] h-[14px] object-cover" />
<img src={phonelogo3} alt="" className="w-[41px] h-[26px] object-cover" />
            </div>
            <img
              src={hero}
              alt=""
              className="w-full h-[450px] object-cover z-10 blur-[6px] overflow-hidden"
            />
            <div className="absolute top-[100px] md:top-[170px] w-[100%] md:w-[68%] z-20 bg-white/50 md:bg-white/55">
              <div className="my-5 mx-4 md:mx-[70px] pr-[40%] md:pr-[0%] flex flex-col justify-evenly gap-3 ">
                <span className="flex flex-col justify-between gap-2">
                  <h2 className="font-[800] hidden md:block text-[16px] font-Figtree text-[#303030]">
                    Painless Root Canal Tratment in Delhi
                  </h2>
                  <h2 className="font-[800] block md:hidden text-[16px] font-Figtree text-[#303030]">
                    Your Smile <br /> Out Priority At <br />{" "}
                    <span className="text-[#E9811F]">Clove Dental</span>
                  </h2>
                  <p className="font-[600] text-[16px] font-Figtree text=[#4E4E4E]">
                    Expert RCT. Zero Pain. Right Here in Delhi.
                  </p>
                </span>
                <button className="flex gap-1 rounded-full bg-[#E9811F] text-white w-fit px-3 py-2">
                  <p className="">Book Appointment</p>
                </button>
              </div>
            </div>
            <img
              src={men}
              alt=""
              className="absolute left-[60px] md:left-[468px] bottom-[-40px] z-30 scale-x-[-1]"
            />
          </div>
        </div>

        <div className="w-[30%] hidden md:flex flex-col justify-evenly gap-2 border-[1px] border-[#FFF9F4] bg-[#FFFAF5] py-4 px-12">
          <div className="flex flex-col">
            <h1 className="font-Figtree font-[700] text-[16px] text-[#303030]">
              Get Expert Dental Guidance in Delhi
            </h1>
            <p className="font-Figtree font-[400] text-[#474747]">
              Book your free consultancy today and take the first step towards
              healthy,beautiful teeth.
            </p>
          </div>
          <div className="flex flex-col gap-4">
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
            <div className="rounded-full w-full border-[1px] flex overflow-hidden border-[#FFF9F4]">
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
                className="w-[19px] h-[19px] border-[1px] border-[#FFF9F4] rounded-[4px] "
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
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-12 my-2 mx-3 animate-scroll whitespace-nowrap">
          {arr.map((item, index) => (
            <span
              className="font-bold first-line:leading-[130%] flex flex-row gap-1 items-center"
              key={index}
            >
              <img src={item.img} alt="" className="" />
              <span className="font-[14px] flex gap-1">
                <span className="text-[#E9811F]">{item.textOrange}</span>
                <span className="text-black">{item.textBlack}</span>
              </span>
            </span>
          ))}

          {arr.map((item, index) => (
            <span
              className="font-bold first-line:leading-[130%] flex flex-row gap-1 items-center"
              key={index}
            >
              <img src={item.img} alt="" className="" />
              <span className="font-[14px] flex gap-1">
                <span className="text-[#E9811F]">{item.textOrange}</span>
                <span className="text-black">{item.textBlack}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
