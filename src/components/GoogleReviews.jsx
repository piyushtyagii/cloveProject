import React from "react";
import reviewClient from "../assets/misc/reviewClient.jpg";
import googleIcon from "../assets/icons/googleIcon.png";
import starIcon from "../assets/icons/starIcon.png";

const googleReviews = [
  {
    name: "Neha Singh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    name: "Neha Singh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    name: "Neha Singh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    name: "Neha Singh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    name: "Neha Singh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
];
const Reviews = () => {
  return (
    <div className="flex flex-col w-full py-[30px] px-0 md:px-[120px] gap-[20px] bg-[#FFF9F5] overflow-xhidden">
      <h1 className="font-Raleway font-[700] text-[24px] leading-[130%] text-center text-[#303030]">
        Google Reviews
      </h1>
      <div className="flex w-full flex-col md:flex-row gap-[40px] md:gap-[69px] justify-center items-center overflow-hidden">
        <div className="flex flex-row md:flex-col px-0 justify-center items-center gap-[12px]  md:w-full h-[155px] overflow-hidden">
          <img
            src={googleIcon}
            alt=""
            className="w-[58px] h-[65px] object-contain"
          />
          <div className="flex flex-col w-full justify-center items-center gap-[16px] md:gap-[9px] overflow-hidden">
            <div className="flex flex-row gap-[7px] justify-center items-center overflow-hidden">
              <img
                src={starIcon}
                alt=""
                className="w-[29px] h-[29px] object-contain "
              />
              <div className="h-[29px] w-[1px] bg-[#FFE7D2]"></div>
              <h2 className="font-Figtree font-[700] text-[24px] leading-[100%] text-[#303030]">
                4.9
              </h2>
            </div>
            <h2 className="font-Figtree font-[700] text-[24px] leading-[100%] text-[#EA7D28] text-center">
              &#40;1.6 Lakhs+&#41;
            </h2>
            <h3 className="font-Figtree font-[600] text-[16px] leading-[100%] text-[#474747] text-center">
              Verified Google Reviews
            </h3>
          </div>
        </div>
        <div className="hidden md:block h-[142px] w-[2px] bg-[#FFDDC1]"></div>
        <div
          className="flex flex-row gap-[24px] w-full px-4 md:px-0 overflow-x-auto [&::-webkit-scrollbar]:hidden
     [-ms-overflow-style:'none']
     [scrollbar-width:'none'] flex-nowrap"
        >
          {googleReviews.map((item, index) => (
            <div
              className=" relative flex flex-col min-w-[252px] md:min-w-[302px] justify-center items-center py-[20px] md:py-[15px] px-3 gap-[24px] md:gap-[18px] rounded-[15px] bg-[#FFFFFF]"
              key={index}
            >
                <div className="absolute top-0 right-0 w-[60px] h-[60px] rounded-tr-[11px] md:rounded-tr-[15px] rounded-bl-[92px] md:rounded-bl-[120px] bg-[#FFEBC4]">
                    <img src={googleIcon} alt="" className="absolute w-[30px] md:w-[27px] h-[30px] md:h-[28px] top-[11px] left-[21px] object-contain" />
                </div>
              <div className="">
                <img
                  src={reviewClient}
                  alt=""
                  className="w-[68px] md:w-[51px] h-[60px] md:h-[51px] rounded-[50%] object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-[18px] px-2">
                <h2 className="font-Figtree text-[18px] md:text-[16px] font-bold leading-[100%] text-[#303030]">
                  {item.name}
                </h2>
                <div className="flex flex-row">
                  <img
                    src={starIcon}
                    alt=""
                    className="w-[24px] md:w-[18px] h-[24px] md:h-[18px] object-contain"
                  />
                  <img
                    src={starIcon}
                    alt=""
                    className="w-[24px] md:w-[18px] h-[24px] md:h-[18px] object-contain"
                  />
                  <img
                    src={starIcon}
                    alt=""
                    className="w-[24px] md:w-[18px] h-[24px] md:h-[18px] object-contain"
                  />
                  <img
                    src={starIcon}
                    alt=""
                    className="w-[24px] md:w-[18px] h-[24px] md:h-[18px] object-contain"
                  />
                  <img
                    src={starIcon}
                    alt=""
                    className="w-[24px] md:w-[18px] h-[24px] md:h-[18px] object-contain"
                  />
                </div>
                <p className="font-Figtree font-[400] text-[16px] md:text-[12px] leading-[150%] text-[#464646]">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

