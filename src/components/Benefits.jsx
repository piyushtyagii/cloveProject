import React, { useState } from "react";
import benefitsImage from "../assets/misc/benefitsImage.png";
import plus from "../assets/icons/plus.png";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  "DORI - A.I enabled Dental Chair",
  "10x Safety and 4 steps sterilization process",
  "Experienced and Certified implantologists",
  "Updated with world class equipments",
  "Regular audits for safety protocols",
];
const answers = [
  "DORI uses advanced AI technology to optimize patient comfort and chair adjustments automatically.",
  "Our sterilization process follows 10x safety protocols, including 4 rigorous steps for infection control.",
  "All implantologists at Clove Dental are highly experienced, certified, and trained in the latest procedures.",
  "We use world-class dental equipment to ensure precision, comfort, and faster treatment times.",
  "Regular audits are conducted to maintain strict safety standards across all our clinics nationwide.",
];

const Benefits = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <div className="md:px-[120px] px-4 py-[40px]">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col justify-center items-center text-center gap-[8px]">
          <h1 className="font-Figtree font-[700] text-[20px] md:text-[24px] leading-[100%] text-[#303030]">
            Why Choose Clove Dental
          </h1>
          <h2 className="font-Figtree font-[400] text-[16px] md:text-[20px] leading-[130%] text-[#474747]">
            Clove Dental is India's Leading dental care brand with 600+ clinic
            nationwide
          </h2>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row justify-between">
          <div className="flex w-full md:w-[55%] flex-col py-3 md:py-0 gap-[24px] md:gap-0  md:justify-evenly">
            {questions.map((item, index) => (
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between cursor-pointer" key={index}>
                  <h2
                    className="font-Figtree font-[600] text-[16px] leading-[100%] text-[#1A1A1A]"
                   
                  >
                    {item}
                  </h2>
                  <img
                    src={plus}
                    alt=""
                    className={`text-[#EA7D28] w-[16px] h-[16px] cursor-pointer ${openIndex==index ? "rotate-45 scale-110" : "rotate-0 scale-100"}`}
                    onClick={() => {
                      handleToggle(index);
                    }}
                  />
                </div>
                <AnimatePresence>
                  {openIndex==index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="font-Figtree font-[400] text-[14px] text-[#454444]">
                        {answers[index]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[40%]">
            <img
              src={benefitsImage}
              alt=""
              className="w-[358px] md:w-[461px] h-[250px] md:h-[422px] rounded-[12px] md:rounded-[20px] object-top object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
