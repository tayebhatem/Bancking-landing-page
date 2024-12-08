import  { useState } from 'react'
import { feedbacks } from '../constants'
import clsx from 'clsx'
import Card from './card'
import Avatar from './avatar'
import { FaStar } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import {motion} from 'framer-motion'
const FeedBacks = () => {
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
    <div className="max-md:hidden space-y-6 lg:pt-14 xl:pt-0 overflow-x-hidden px-2 ">

    <motion.div 
    className="flex flex-row items-center justify-between"
    initial={{ y: 100, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    viewport={{ once: true, amount: 0.5 }} 
    transition={{ type: "tween", stiffness: 50, duration: 0.8 }}
    >
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
    </motion.div>

 
        
      <div 
      className={clsx("flex flex-row justify-between items-center flex-nowrap w-screen gap-x-5  h-80 transition-all duration-300  ")}
      style={{
        transform: `translateX(-${slider*3}px)`
      }}
    
      
      >
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

    
  )
}

export default FeedBacks
