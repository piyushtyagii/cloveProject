import React, { useState } from 'react';
import plus from "../assets/icons/plus.png";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  "Can i choose the dentist on my own for treatment ?",
  "Will i get the same doctor each time i visit the same clinic?",
  "How you are able to provide less prices than other dental brands?",
  "How you are able to provide such good facilities at low cost?",
  "What are your dental clinic timings",
  "How can i book an appointment?",
  "How frequently should i visit a dentist"
];

const answers = [
  "Yes, you can choose your preferred dentist based on availability at the clinic.",
  "In most cases, yes. We try to ensure that you meet the same doctor during each visit, unless there is a schedule change or emergency.",
  "We reduce extra operational costs and use an efficient clinic model, allowing us to offer high-quality treatments at more affordable prices.",
  "We use standardized processes, advanced equipment, and optimized operations, which help us provide premium facilities at a lower cost.",
  "Our clinic timings may vary by location, but most clinics operate from 10 AM to 8 PM. Check your nearest clinic for exact timings.",
  "You can book an appointment through our website, mobile app, or by calling the clinic directly.",
  "It is recommended to visit a dentist every 6 months for routine check-ups and preventive care."
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const half = Math.ceil(questions.length / 2);

  return (
    <div className="md:px-[60px] px-[22px] py-[40px]">
      <div className="flex flex-col gap-[40px]">
        
        <h1 className="text-center font-Figtree font-[700] text-[24px] leading-[130%] text-[#303030]">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col md:flex-row gap-[50px] md:gap-0 justify-between">
          
          <div className="flex flex-col gap-[50px]">
            {questions.slice(0, half).map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                
                <div className="flex flex-row w-auto md:w-[600px] gap-[16px] md:gap-0 justify-between cursor-pointer">
                  <h2 className="font-Figtree font-[600] text-[16px] text-[#1A1A1A]">
                    {item}
                  </h2>

                  <img
                    src={plus}
                    alt=""
                    className={`w-[16px] h-[16px] cursor-pointer transition-all ${
                      openIndex === index ? "rotate-45 scale-110" : "rotate-0 scale-100"
                    }`}
                    onClick={() => handleToggle(index)}
                  />
                </div>

                <AnimatePresence>
                  {openIndex === index && (
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

          <div className="flex flex-col gap-[50px]">
            {questions.slice(half).map((item, index) => {
              const actualIndex = index + half; // important fix

              return (
                <div className="flex flex-col gap-4" key={actualIndex}>

                  <div className="flex flex-row w-auto md:w-[600px] gap-[16px] md:gap-0 justify-between cursor-pointer">
                    <h2 className="font-Figtree font-[600] text-[16px] text-[#1A1A1A]">
                      {item}
                    </h2>

                    <img
                      src={plus}
                      alt=""
                      className={`w-[16px] h-[16px] cursor-pointer transition-all ${
                        openIndex === actualIndex
                          ? "rotate-45 scale-110"
                          : "rotate-0 scale-100"
                      }`}
                      onClick={() => handleToggle(actualIndex)}
                    />
                  </div>

                  <AnimatePresence>
                    {openIndex === actualIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="font-Figtree font-[400] text-[14px] text-[#454444]">
                          {answers[actualIndex]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Faq;
