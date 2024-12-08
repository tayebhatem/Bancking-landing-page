
import Card from "../components/card"
import { benefits, feedbacks } from "../constants"
import { FiArrowRight } from "react-icons/fi"
import { Icon } from "@iconify/react";
import Avatar from "../components/avatar";
import { FaStar } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import clsx from "clsx";

const About = () => {
  const [slider, setSlider] = useState(0)
  const [page, setPage] = useState(1)
  const ranges=Math.ceil((feedbacks.length/3))
  const handlNextPage=()=>{
    setSlider(prevSlider=>384+prevSlider)
    setPage(prevPage=>prevPage+1)
  }
  const handlPrevPage=()=>{
    setSlider(prevSlider=>384-prevSlider)
    setPage(prevPage=>prevPage-1)
  }
  return (
  <section className="py-20">
    <div className='container  overflow-x-hidden mx-auto space-y-6'>
    <div className="space-y-4">
    <h3 className="h4 md:h3 lg:h2 max-md:text-center">
     Our Key Benefits
     </h3>
     <div className="grid md:grid-cols-3 gap-6">
        {
            benefits.map(({title,id,description,icon})=>(
                <Card key={id}>
                    <div className="space-y-4 flex flex-col items-center p-6">
                
                    <Icon icon={icon} className="size-20 group-hover:text-primary " />
                    <h3 className="max-lg:h5 h4  text-center">{title}</h3>
                      <p className="muted max-lg:p3 p2 line-clamp-3   text-center">
                         {description}
                      </p>

                     <div className=" self-end">
                    <div className="flex flex-row items-center gap-x-3 group-hover:text-primary ">
                    <a className="font-medium  text-sm cursor-pointer transition-all duration-300">
                        Read more
                      </a>
                      <FiArrowRight className="size-4" />
                    </div>
                     </div>
                    </div>
                </Card>
            ))
        }
     </div>

    </div>
     <div className="relative space-y-4 ">
     <img src="/images/woman-image.svg" className="rounded-lg max-lg:w-full w-[80%]" />
     <div className="space-y-4 max-lg:rounded-none rounded-lg max-lg:shadow-none shadow-md max-lg:p-0 p-8 bg-white max-lg:static   absolute  top-36 lg:top-20 right-0 max-lg:w-full  w-[520px]">
      <h2 className="max-sm:h4 h3 max-sm:max-w-72 max-w-96  lg:max-w-sm  max-md:text-center max-md:mx-auto  ">
      Ready for the future?
      Download The App!
      </h2>
      <p className="max-lg:p3 p2 muted max-md:text-center">
      Download the banking app to easily manage your finances, check account balances, transfer money, pay bills, and access a range of banking services from your mobile device.
      </p>
      <div className="flex flex-row items-center gap-4 max-md:justify-center flex-wrap ">
      <img src="/images/play-store.svg" className="min-w-40 cursor-pointer" />
        <img src="/images/app-store.svg"  className="min-w-40 cursor-pointer" />
      </div>
     </div>
     </div>

     <div className="max-md:hidden space-y-6 lg:pt-14 xl:pt-0 overflow-x-hidden px-2 ">
    <div className="flex flex-row items-center justify-between">
    <h2 className="max-lg:h4 h3 ">
      What Our Clients Say About Us
      </h2>
      <div className="flex flex-row items-center gap-x-2">
      <button
        onClick={handlPrevPage}
        disabled={page===1}
         className={clsx("bg-[#1D1C31]/10 hover:bg-[#1D1C31]/5   p-2 rounded-full",page===1 && 'opacity-30')}>
          <BsArrowLeft className="size-5 "/>
        </button>
        <button
        onClick={handlNextPage}
        disabled={page===ranges}
         className={clsx("bg-[#1D1C31]/10 hover:bg-[#1D1C31]/5   p-2 rounded-full",page===ranges && 'opacity-30')}>
          <BsArrowRight className="size-5 "/>
        </button>
      </div>
    </div>

      <div className={clsx("flex flex-row justify-between items-center flex-nowrap w-screen gap-x-5  h-80 transition-all duration-300  ",`-translate-x-[calc(${slider}px*3+40px*3)] `)}>
        {
         feedbacks.map(({id,name,feedback,avatar,date,stars})=>(
          <Card key={id}>
           <div className="group-hover:bg-primary p-8 rounded-lg space-y-4 w-96">
           <p className="muted p4 lg:p3 group-hover:text-white">
              {feedback}

            </p>
            <div className="h-[1px] w-full bg-[#1D1C31]/10 group-hover:bg-white/10"/>
          
         <div className="flex flex-row items-center gap-x-4">
         <Avatar image={'images/'+avatar}/>
        <div>
        <h4 className="h5 group-hover:text-white">{name}</h4>
        <p className="p4 muted group-hover:text-white/80">{date}</p>
        <ul className="grid grid-cols-5">
          {
           stars.map((item)=>(
            <li key={item}>
           <FaStar className="text-[#FFB800] size-4"  />

            </li>
           ))
          }
        </ul>
        </div>
         </div>
           </div>
            </Card>
         ))
        }
       
      </div>
      <div className="flex flex-row items-center justify-center gap-x-2">
        
          {
          Array.from({ length: ranges }, (_, index) => (
            <button className={clsx("h-2 w-12 -skew-x-12  hover:bg-primary/80 transition-all duration-300",page===index+1?"bg-primary":"bg-[#1D1C31]/10")} key={index}/>
          ))
          
          }
        </div>
     </div>

    </div>
  </section>
  )
}

export default About
