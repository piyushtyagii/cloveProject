import React from 'react'
import worksample1 from "../assets/worksamples/worksample1.png"
import worksample2 from "../assets/worksamples/worksample2.png"
import worksample3 from "../assets/worksamples/worksample3.png"
import worksample4 from "../assets/worksamples/worksample4.png"



const works=[
    {
        img:worksample1,
        textblack:"Arjun Mehta",
        textOrange:"Mumbai"
    },
    {
        img:worksample2,
        textblack:"Kavita Sharma",
        textOrange:"Bangalore"
    },
    {
        img:worksample3,
        textblack:"Neha Joshi",
        textOrange:"Delhi"
    },
    {
        img:worksample4,
        textblack:"Viram Desai",
        textOrange:"Chennai"
    }
]



const Worksamples = () => {
  return (
    <div className="md:px-[120px] py-[40px] w-full overflow-hidden">
            <div className="flex flex-col gap-[10px] items-center justify-center w-full">
                <h1 className="font-Figtree font-[700] text-[20px] md:text-[24px] leading-[120%] md:leading-[130%] text-[#303030] md:text-[#1A1A1A]">Real Smiles, Real Transformations</h1>
                <h2 className='font-Figtree font-[400] text-[16px] text-center md:text-[20px] leading-[130%] text-[#474747]'>See the life-changing results our dental implant patients enjoy</h2>
                <div className="w-full flex flex-row gap-[40px] overflow-x-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden
     [-ms-overflow-style:'none']
     [scrollbar-width:'none'] flex-nowrap px-4 md:px-0">
                    {
                        works.map((item,index)=>(
                            <div className="flex flex-col gap-[12px] min-w-[60%] md:min-w-[0%]" key={index}>
                        <img src={item.img} alt="" className="w-[295px] h-[200px] rounded-[20px] object-cover" />
                        <div className="flex flex-row justify-between font-Figtree font-[600] text-[16px] leading-[100%]">
                            <h3 className="text-[#1A1A1A]">{item.textblack}</h3>
                            <h3 className="text-[#F58420]">{item.textOrange}</h3>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default Worksamples