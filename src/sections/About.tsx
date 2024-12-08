
import Card from "../components/card"
import { benefits } from "../constants"
import { FiArrowRight } from "react-icons/fi"
import { Icon } from "@iconify/react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import clsx from "clsx";
import {motion} from 'framer-motion'
import FeedBacks from "../components/FeedBacks";
const About = () => {
  
  return (
  <section className="py-20">
    <div className='container  overflow-x-hidden mx-auto space-y-6'>
    <div className="space-y-4">
    <motion.h3 
     initial={{ y: 100, opacity: 0 }} 
     whileInView={{ y: 0, opacity: 1 }} 
     viewport={{ once: true, amount: 0.5 }} 
     transition={{ type: "tween", stiffness: 50, duration: 0.8 }}
    className="h4 md:h3 lg:h2 max-md:text-center">
     Our Key Benefits
     </motion.h3>
     <div className="grid md:grid-cols-3 gap-6">
        {
            benefits.map(({title,id,description,icon})=>(
                <motion.div  
                key={id}
                initial={{ y: 100, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                viewport={{ once: true, amount: 0.5 }} 
                transition={{ type: "tween", stiffness: 50, duration: 0.8 }}
                >
                  <Card >
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
                </motion.div>
            ))
        }
     </div>

    </div>
     <div className="relative space-y-4 ">
     <motion.img 
     src="/images/woman-image.svg" className="rounded-lg max-lg:w-full w-[80%]"
     initial={{ x: -100, opacity: 0 }} 
     whileInView={{ x: 0, opacity: 1 }} 
     viewport={{ once: true, amount: 0.5 }} 
     transition={{ type: "spring", stiffness: 50, duration:1 }}
     
     />
     <motion.div 
     className="space-y-4 max-lg:rounded-none rounded-lg max-lg:shadow-none shadow-md max-lg:p-0 p-8 bg-white max-lg:static   absolute  top-36 lg:top-20 right-0 max-lg:w-full  w-[520px]"
     initial={{ x: 100, opacity: 0 }} 
     whileInView={{ x: 0, opacity: 1 }} 
     viewport={{ once: true, amount: 0.5 }} 
     transition={{ type: "spring", stiffness: 50, duration:1 }}
     >
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
     </motion.div>

     </div>
     

     <FeedBacks/>
    

    </div>
  </section>
  )
}

export default About
