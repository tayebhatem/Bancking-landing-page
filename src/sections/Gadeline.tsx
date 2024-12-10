import { Icon } from "@iconify/react/dist/iconify.js"
import { roadmap } from "../constants"
import clsx from "clsx"
import { BsArrowRight } from "react-icons/bs"
import {motion} from 'framer-motion'
const Gadeline = () => {
  return (
   <section className=" py-20 relative overflow-hidden  bg-[#5D55FF]">
    <div className="container mx-auto space-y-10    ">

    <motion.div 
    className=" grid gap-x-4 items-start max-md:grid-cols-1 grid-cols-4"
    initial={{ y: 100, opacity: 0 }} 
    whileInView={{ y: 0, opacity: 1 }} 
    viewport={{ once: true, amount: 0.5 }} 
    transition={{ type: "tween", stiffness: 50, duration: 0.8 }}
    >

    <h3 className="h4 md:h3 lg:h2 max-md:text-center text-white col-span-2">Guideline</h3>
    <p className="p4 lg:p3 text-white/60 max-md:hidden block ">
    Banks provide a range of financial services, including savings accounts, loans, and investment opportunities,
    </p>

    <p className="p4 lg:p3  text-white/60 max-md:hidden block">
    to help individuals and businesses manage their money, grow their wealth, and achieve their financial goals.
    </p>
   </motion.div>

   <motion.div 
   className="relative grid gap-6 max-md:grid-cols-1 grid-cols-4"
   initial={{ y: 100, opacity: 0 }} 
   whileInView={{ y: 0, opacity: 1 }} 
   viewport={{ once: true, amount: 0.5 }} 
   transition={{ type: "tween", stiffness: 50, duration: 0.8 }}
   >
   {
    roadmap.map(({id,features,status})=>(
        <div className={clsx("flex gap-y-32   gap-x-6    flex-col",id%2===1?'flex-col max-md:flex-row':'flex-col-reverse max-md:flex-row-reverse',id>2 && 'max-md:hidden')} key={id}>

    <ul className="p-6 space-y-6 border-2 border-white/10 rounded-lg">
       {
        features.map(({text,icon})=>(
<li className=" p5 sm:p3 text-white flex flex-row items-center gap-x-2">
      <Icon icon={icon} className="size-4 sm:size-5"/>
     {text}
        </li>
        ))
       }
    </ul>
    <div className={clsx("h-40 flex max-md:items-center ",id%2===1?'items-start ':'items-end')}>
    <div className=" h6 sm:h5 w-full text-center bg-white rounded-lg px-5 py-3 ">
   {status}
   </div>

    </div>
   </div>
    ))
   }

   <div className="absolute max-md:hidden  bg-gradient-to-r from-transparent via-white to-transparent h-0.5    w-full  top-1/2 left-0"/>
   <div className="absolute max-md:hidden top-1/2 -translate-y-1/2 left-0 w-full h-8  flex flex-row justify-around items-center">
{
    Array.from({ length: 4 }, (_, index) =>(
    <div key={index} className=" size-4 lg:size-8 rounded-full border-4 border-white bg-[#5D55FF]"/>

    ))
}   
   </div>
   </motion.div>


  <motion.div 
  className="w-full flex justify-center"
  initial={{ y: 100, opacity: 0 }} 
  whileInView={{ y: 0, opacity: 1 }} 
  viewport={{ once: true, amount: 0.5 }} 
  transition={{ type: "tween", stiffness: 50, duration: 0.8 }}
  >
  <button className="text-white p2 max-md:flex hidden  flex-row items-center gap-x-2 hover:text-white/80 " >
   See more
   <BsArrowRight className="size-5  "/>
   </button>
  </motion.div>
            </div>

   
   </section>
  )
}

export default Gadeline
