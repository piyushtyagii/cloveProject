import React from "react";
import delhi from "../assets/cities/delhi.png";
import hyderabad from "../assets/cities/hyderabad.png";
import ahmedabad from "../assets/cities/ahmedabad.png";
import punjab from "../assets/cities/punjab.png";
import chennai from "../assets/cities/chennai.png";
import bangalore from "../assets/cities/bangalore.png";
import pune from "../assets/cities/pune.png";
import mumbai from "../assets/cities/mumbai.png";
import clinic1 from "../assets/clinics/clinic1.jpg";
import clinic2 from "../assets/clinics/clinic2.jpg";
import clinic3 from "../assets/clinics/clinic3.jpg";
import clinic4 from "../assets/clinics/clinic4.jpg";

const locationsData = [
  {
    img: delhi,
    city: "Delhi/NCR",
    clinics: "190",
  },
  {
    img: bangalore,
    city: "Bangalore",
    clinics: "110",
  },
  {
    img: mumbai,
    city: "Mumbai",
    clinics: "40",
  },
  {
    img: chennai,
    city: "Chennai",
    clinics: "59",
  },
  {
    img: hyderabad,
    city: "Hyderabad",
    clinics: "76",
  },
  {
    img: punjab,
    city: "Punjab",
    clinics: "40",
  },
  {
    img: pune,
    city: "Pune",
    clinics: "76",
  },
  {
    img: ahmedabad,
    city: "Ahemdabad",
    clinics: "27",
  },
];
const Locations = () => {
  return (
    <div className="md:px-[60px] px-4 py-[40px]">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-Figtree font-[700] text-[24px] leading-[100%] text-center md:text-left text-[#303030]">
            Find Us Across India
          </h1>
          <p className="font-Figtree font-[400] text-[20px] text-center md:text-left leading-[130%] text-[#474747]">
            With over 500 clinics across India,your're never too far froma clove
            Dental clinic. Choose your preferred city to book an appointment.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="grid grid-cols-2 grid-rows-4 gap-[10px] md:gap-y-[27px] md:gap-x-[10px] overflow-hidden">
            {locationsData.map((item, index) => (
              <div
                className="flex flex-row w-[170px] md:w-[196px] h-[80px] md:h-[86px] rounded-[8px] border-[1px] border-[#D0D0D0] justify-center items-center gap-[12px]"
                key={index}
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-[54px] w-[54px] object-cover"
                />
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-Raleway font-[700] text-[16px] leading-[160%] text-[#303030]">
                    {item.city}
                  </h3>
                  <p className="font-OpenSans font-[600] text-[16px] leading-[150%] text-[#303030]">
                    {item.clinics} Clinics
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex flex-row pt-6 md:pt-0 [&::-webkit-scrollbar]:hidden
     [-ms-overflow-style:'none']
     [scrollbar-width:'none'] w-full md:w-auto flex-nowrap overflow-x-auto md:overflow-hidden md:grid grid-cols-2 grid-rows-2 gap-[10px]"
          >
            <img
              src={clinic1}
              alt=""
              className="w-[409px] h-[207px] object-cover rounded-[10px]"
            />
            <img
              src={clinic2}
              alt=""
              className="w-[409px] h-[207px] object-cover rounded-[10px]"
            />
            <img
              src={clinic3}
              alt=""
              className="w-[409px] h-[207px] object-cover rounded-[10px]"
            />
            <img
              src={clinic4}
              alt=""
              className="w-[409px] h-[207px] object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
