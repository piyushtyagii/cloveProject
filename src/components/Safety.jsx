import React from "react";
import safety1 from "../assets/safety/safety1.png";
import safety2 from "../assets/safety/safety2.png";
import safety3 from "../assets/safety/safety3.png";
import arrowIcon from "../assets/icons/arrowIcon.png";

const Safety = () => {
  return (
    <div className="md:px-[120px] py-[40px] w-full overflow-hidden">
      <div className="flex flex-col gap-[10px] items-center justify-center w-full ">
        <h1 className="font-Figtree font-[700] text-[20px] md:text-[24px] leading-[120%] md:leading-[130%] text-[#303030] md:text-[#1A1A1A]">
          Safety, Precision, and Innovation
        </h1>
        <h2 className="font-Figtree font-[400] text-[16px] text-center md:text-[20px] leading-[130%] text-[#474747]">
          Advanced care with top safety, sterilization and technology
        </h2>
        <div className="flex-row w-full gap-[41px] hidden md:flex">
          <div className="relative">
            <img
              src={safety1}
              alt=""
              className="w-[438px] md:w-[412px] object-cover z-10 h-[250px] md:h-[345px] rounded-[20px]"
            />
            <div className="absolute w-[300px] md:w-[348px] h-[153px] md:h-[205px] z-20 top-[120px] left-[32px] gap-[8px] md:gap-[20px] rounded-[10px] p-[16px] md:p-[20px] overflow-hidden flex flex-col bg-[#112230]">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-row w-full justify-center items-center gap-[23px]">
                  <h1 className="font-Figtree font-[700] text-[18px] md:text-[20px] leding-[120%] text-[#ffffff]">
                    Uncompromised Safety
                  </h1>
                  <div className="w-[108px] md:w-[133px] h-[7px] rounded-[20px] bg-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[300] text-[14px] md:text-[16px] leding-[130%] text-[#ffffff]">
                  10X Safety Protocols for a secure and worry-free dental
                  experience
                </h2>
              </div>
              <div className="flex flex-row gap-[16px] text-[#EA7D28]">
                <div className="flex flex-row gap-0 cursor-pointer justify-center items-center -rotate-45">
                  <div className="w-[15px] h-[1px] bg-[#EA7D28]"></div>
                  <div className="w-[20px] h-[20px] rounded-full bg-white border-[2px] border-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[600] cursor-pointer hover:text-[#b04705] text-[14px] leading-[130%] text-[#F58420]">
                  Learn More
                </h2>
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={safety2}
              alt=""
              className="w-[438px] md:w-[412px] object-cover z-10 h-[250px] md:h-[345px] rounded-[20px]"
            />
            <div className="absolute w-[300px] md:w-[348px] h-[153px] md:h-[205px] z-20 top-[120px] left-[32px] gap-[8px] md:gap-[20px] rounded-[10px] p-[16px] md:p-[20px] overflow-hidden flex flex-col bg-[#112230]">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-row w-full justify-center items-center gap-[23px]">
                  <h1 className="font-Figtree font-[700] text-[18px] md:text-[20px] leding-[120%] text-[#ffffff]">
                    Assuring Cleanliness
                  </h1>
                  <div className="w-[151px] md:w-[181px] h-[7px] rounded-[20px] bg-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[300] text-[14px] md:text-[16px] leading-[130%] text-[#ffffff]">
                  Rigid 4-Step Sterilization process, assuring a safe spotless
                  clinic.
                </h2>
              </div>
              <div className="flex flex-row gap-[16px] text-[#EA7D28]">
                <div className="flex flex-row gap-0 cursor-pointer justify-center items-center -rotate-45">
                  <div className="w-[15px] h-[1px] bg-[#EA7D28]"></div>
                  <div className="w-[20px] h-[20px] rounded-full bg-white border-[2px] border-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[600] cursor-pointer hover:text-[#b04705] text-[14px] leading-[130%] text-[#F58420]">
                  Learn More
                </h2>
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={safety3}
              alt=""
              className="w-[438px] md:w-[412px] object-cover z-10 h-[250px] md:h-[345px] rounded-[20px]"
            />
            <div className="absolute w-[300px] md:w-[348px] h-[153px] md:h-[205px] z-20 top-[120px] left-[32px] gap-[8px] md:gap-[20px] rounded-[10px] p-[16px] md:p-[20px] overflow-hidden flex flex-col bg-[#462512]">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-row w-full justify-center gap-[23px] items-center">
                  <h1 className="font-Figtree font-[700] text-[128px] md:text-[20px] leding-[120%] text-[#ffffff]">
                    Experience <span className="text-[22px]">AIPS</span>
                  </h1>
                  <div className="w-[93px] md:w-[105px] h-[7px] rounded-[20px] bg-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[300] text-[14px] md:text-[16px] leding-[130%] text-[#ffffff]">
                  Our AI- Powered Sterilization (AIPS) Monitoring system from
                  DORI, USA Exclusively at Clove
                </h2>
              </div>
              <div className="flex flex-row gap-[16px] text-[#EA7D28]">
                <div className="flex flex-row gap-0 cursor-pointer justify-center items-center -rotate-45">
                  <div className="w-[15px] h-[1px] bg-[#EA7D28]"></div>
                  <div className="w-[20px] h-[20px] rounded-full bg-white border-[2px] border-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[600] cursor-pointer hover:text-[#b04705] text-[14px] leading-[130%] text-[#F58420]">
                  Learn More
                </h2>
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-row px-5 w-full gap-[41px] overflow-x-auto md:overflow-hidden flex-nowrap [&::-webkit-scrollbar]:hidden
     [-ms-overflow-style:'none']
     [scrollbar-width:'none'] overflow-y-hidden">
          <div className="w-[300px] h-auto flex flex-col flex-shrink-0 overflow-hidden rounded-[20px]">
            <img
              src={safety1}
              alt=""
              className="w-full object-cover overflow-hidden z-10 h-[262px] "
            />
            <div className="w-[300px] z-20 gap-[8px] p-[16px] overflow-hidden flex flex-col bg-[#112230]">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-row w-full justify-center items-center gap-[23px]">
                  <h1 className="font-Figtree font-[700] text-[18px] leading-[120%] text-[#ffffff]">
                    Assuring Cleanliness
                  </h1>
                  <div className="w-[150px] h-[7px] rounded-[20px] bg-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[300] text-[14px] leading-[130%] text-[#ffffff]">
                  Rigid 4-Step Sterilization process, assuring a safe spotless
                  clinic.
                </h2>
              </div>
              <div className="flex flex-row gap-[16px] text-[#EA7D28]">
                <div className="flex flex-row gap-0 cursor-pointer justify-center items-center -rotate-45">
                  <div className="w-[15px] h-[1px] bg-[#EA7D28]"></div>
                  <div className="w-[20px] h-[20px] rounded-full bg-white border-[2px] border-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree cursor-pointer hover:text-[#b04705] font-[600] text-[14px] leading-[130%] text-[#F58420]">
                  Learn More
                </h2>
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[423px] flex flex-col flex-shrink-0 overflow-hidden rounded-[20px]">
            <img
              src={safety2}
              alt=""
              className="object-cover overflow-hidden z-10 h-[262px]"
            />
            <div className="w-[300px] z-20 top-[120px] left-[32px] gap-[8px] p-[16px] overflow-hidden flex flex-col bg-[#112230]">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-row w-full justify-center items-center gap-[23px]">
                  <h1 className="font-Figtree font-[700] text-[18px] leading-[120%] text-[#ffffff]">
                    Uncompromised Safety
                  </h1>
                  <div className="w-[108px] h-[7px] rounded-[20px] bg-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[300] text-[14px] leading-[130%] text-[#ffffff]">
                  10X Safety Protocols for a secure and worry-free dental
                  experience
                </h2>
              </div>
              <div className="flex flex-row gap-[16px] text-[#EA7D28]">
                <div className="flex flex-row gap-0 cursor-pointer justify-center items-center -rotate-45">
                  <div className="w-[15px] h-[1px] bg-[#EA7D28]"></div>
                  <div className="w-[20px] h-[20px] rounded-full bg-white border-[2px] border-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree cursor-pointer hover:text-[#b04705] font-[600] text-[14px] leading-[130%] text-[#F58420]">
                  Learn More
                </h2>
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-[300px] h-[423px] flex flex-col flex-shrink-0 overflow-hidden rounded-[20px]">
            <img
              src={safety3}
              alt=""
              className="w-[438px] object-cover z-10 h-[262px] "
            />
            <div className="w-[300px] md:w-[348px] z-20 top-[120px] left-[32px] gap-[8px] md:gap-[20px] p-[16px] md:p-[20px] overflow-hidden flex flex-col bg-[#462512]">
              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-row w-full justify-center items-center gap-[23px]">
                  <h1 className="font-Figtree font-[700] text-[18px] leading-[120%] text-[#ffffff]">
                    Experience AIPS
                  </h1>
                  <div className="w-[108px] h-[7px] rounded-[20px] bg-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree font-[300] text-[14px] leading-[130%] text-[#ffffff]">
                  Our AI- Powered Sterilization (AIPS) Monitoring system from
                  DORI, USA Exclusively at Clove
                </h2>
              </div>
              <div className="flex flex-row gap-[16px] text-[#EA7D28]">
                <div className="flex flex-row gap-0 cursor-pointer justify-center items-center -rotate-45">
                  <div className="w-[15px] h-[1px] bg-[#EA7D28]"></div>
                  <div className="w-[20px] h-[20px] rounded-full bg-white border-[2px] border-[#EA7D28]"></div>
                </div>
                <h2 className="font-Figtree cursor-pointer hover:text-[#b04705] font-[600] text-[14px] leading-[130%] text-[#F58420]">
                  Learn More
                </h2>
                <img
                  src={arrowIcon}
                  alt=""
                  className="w-[22px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
