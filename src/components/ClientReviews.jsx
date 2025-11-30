import React from 'react'
import review1 from "../assets/reviews/review1.png"
import review2 from "../assets/reviews/review2.png"
import review3 from "../assets/reviews/review3.png"
import review4 from "../assets/reviews/review4.png"
import review5 from "../assets/reviews/review5.png"
import review6 from "../assets/reviews/review6.png"

const reviews=[
    {
        img:review1,
        textblack:"Shubham",
        textOrange:"Aligners",
        place:"Indore"
    },
    {
        img:review2,
        textblack:"Shubhpreet",
        textOrange:"RCT",
        place:"Indore"
    },
    {
        img:review3,
        textblack:"Anita",
        textOrange:"Laser Treatment",
        place:"Bangalore"
    },
    {
        img:review4,
        textblack:"Aarti",
        textOrange:"Dentures",
        place:"Indore"
    },
    {
        img:review5,
        textblack:"Aditya",
        textOrange:"Implant",
        place:"Indore"
    },
    {
        img:review6,
        textblack:"Nikita",
        textOrange:"Implant",
        place:"Indore"
    }
]

const Reviews = () => {
  return (
    <div className="md:px-[120px] py-[40px] w-full overflow-hidden">
            <div className="flex flex-col gap-[20px] items-center justify-center w-full">
                <h1 className="font-Figtree font-[700] text-[20px] md:text-[24px] leading-[120%] md:leading-[130%] text-[#303030] md:text-[#1A1A1A]">What Our Patients Say</h1>
                <h2 className='font-Figtree font-[400] text-[16px] text-center md:text-[20px] leading-[130%] text-[#474747]'>Real smiles, real stories. Here's what our patients love about their CLOVE Dental experience!</h2>
                <div className="w-full flex flex-row gap-[24px] overflow-x-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden
     [-ms-overflow-style:'none']
     [scrollbar-width:'none'] flex-nowrap px-4 md:px-0">
                    {
                        reviews.map((item,index)=>(
                            <div className="flex flex-col gap-[12px] min-w-[60%] md:min-w-[0%]" key={index}>
                        <img src={item.img} alt="" className="w-[200px] md:w-[224px] h-[360px] md:h-[350px] rounded-[10px] object-cover" />
                        <div className="flex flex-row justify-between font-Figtree font-[600] text-[16px] leading-[100%]">
                            <h3 className="text-[#1A1A1A]">{item.textblack}</h3>
                            <h3 className="text-[#F58420]">{item.textOrange}</h3>
                        </div>
                        <div className="flex flex-start">
                            <h2 className="font-Figtree font-[600] text-[14px] leading-[100%] text-[#777777]">{item.place}</h2>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default Reviews