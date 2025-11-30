import React from 'react'
import root from "../assets/treatments/root.png"
import reroot from "../assets/treatments/reroot.png"

const Treatments = () => {
  return (
    <div className="md:px-[120px] py-[40px]">
        <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="font-Figtree font-[700] text-[20px] md:text-[24px] leading-[130%] text-[#1A1A1A]">Types of Root Canal Treatments</h1>
                <p className="font-Figtree font-[400] text-[16px] mdtext-[20px] text-center leading-[130%] text-[#474747]">In a root canal, the dentists removes infected pulp, cleans the tooth, and fills it with special material.</p>
            </div>
            <div className="w-full flex flex-row gap-[20px] md:overflow-hidden overflow-y-hidden overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden
     [-ms-overflow-style:'none']
     [scrollbar-width:'none'] px-4 md:px-0">
                <div className="md:w-[50%] md:min-w-[0%] min-w-[80%] border-[1px] border-[#FFE0C4] rounded-[20px] flex flex-col md:flex-row overflow-hidden">
                    <div className="md:w-[50%]">
                        <img src={root} alt="" className="w-[285px] h-[285px] md:w-[320px] md:h-full object-cover" />
                    </div>
                    <div className="md:w-[50%] flex flex-col gap-[16px] py-6 px-4">
                        <div className="flex flex-col gap-[8px]">
                            <h1 className="font-Figtree font-[700] text-[16px] md:text-[20px] leading-[100%] text-[#1A1A1A]">Root Canal Treatment</h1>
                            <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">Ideal for infected or damaged tooth</p>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h1 className="font-Figtree font-[700] text-[14px] md:text-[16px] leading-[100%] text-[#000000]">Types of RCT</h1>
                            <div className="flex flex-col">
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• Root Canal Treatment</p>
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• Split RCT</p>
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• Split RCT with rubber dam</p>
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• Split RCT with laser</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[4px]">
                                <h2 className="font-Figtree font-[600] text-[12px] md:text-[14px] leading-[130%] text-[#F58420]">Starting Price</h2>
                                <h1 className="font-Figtree font-[700] text-[16px] md:text-[20px] leading-[130%] text-[#1A1A1A]">₹ 19,999</h1>
                            </div>
                            <button className="rounded-[50px] bg-[#F58420] text-[#FFFFFF] font-Figtree font-[600] text-[14px] leading-[100%] w-fit py-3 px-4">Get a Free Consultation</button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] md:min-w-[0%] min-w-[80%] border-[1px] border-[#FFE0C4] rounded-[20px] flex flex-col  md:flex-row overflow-hidden">
                    <div className="md:w-[50%] bg-[#E0D5CB]">
                        <img src={reroot} alt="" className="w-[285px] h-[285px] md:w-[320px] md:h-[332px] object-cover" />
                    </div>
                    <div className="md:w-[50%] flex flex-col gap-[16px] py-6 px-4">
                        <div className="flex flex-col gap-[8px]">
                            <h1 className="font-Figtree font-[700] text-[16px] md:text-[20px] leading-[100%] text-[#1A1A1A]">Re-Root Canal Treatment</h1>
                            <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">Ideal issues that persist or recur after an initial root canal treatment</p>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <h1 className="font-Figtree font-[700] text-[14px] md:text-[16px] leading-[100%] text-[#000000]">Types of RCT</h1>
                            <div className="flex flex-col">
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• Re-RCT with rubber dam</p>
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• Re-RCT laser specialist RCT</p>
                                <p className="font-Figtree font-[400] text-[14px] md:text-[16px] leading-[130%] text-[#474747]">• e-RCT with retrieval of old RCT filling</p>
                               
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex flex-col gap-[4px]">
                                <h2 className="font-Figtree font-[600] text-[12px] md:text-[14px] leading-[130%] text-[#F58420]">Starting Price</h2>
                                <h1 className="font-Figtree font-[700] text-[16px] md:text-[20px] leading-[130%] text-[#1A1A1A]">₹ 19,999</h1>
                            </div>
                            <button className="rounded-[50px] bg-[#F58420] text-[#FFFFFF] font-Figtree font-[600] text-[14px] leading-[100%] w-fit py-3 px-4">Get a Free Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Treatments