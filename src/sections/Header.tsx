
import Logo from "../components/Logo"
import { navData } from "../constants"
import { useScroll, useTransform } from "framer-motion";
import {motion} from 'framer-motion'
import Hamburger from "../components/hamburger";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.2],
        ["transparent","rgb(78 70 232 / 0.8)"]
      )

      useEffect(() => {
       
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

      
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
  return (
   <motion.header style={{backgroundColor}} className="h-20  backdrop-blur-sm duration-500 transition-all  fixed top-0 left-0  flex items-center w-full  z-50 ">
   <div className="container  mx-auto flex flex-row md:items-center justify-between w-full ">
   <Logo/>
   <nav  className={clsx("max-md:absolute flex flex-col md:flex-row items-center gap-6 max-md:pt-24  max-md:bg-white  max-md:rounded-bl-full transition-all duration-500",isOpen ? 'w-full h-screen max-md:rounded-bl-none top-0 right-0':'-top-10  -right-10 max-md:size-0')}>
   <ul className="flex flex-col md:flex-row gap-6">
   {
        navData.map((title,index)=>(
        <li key={index} className={
            clsx("p2  transition-all  duration-300 cursor-pointer text-center text-white max-md:text-primary max-md:hover:text-primary/80 hover:text-white/80",
                isOpen ?'opacity-100':'max-md:opacity-0'
            )
        }
        style={{
            transitionDelay: `${isOpen ? index * 300 : 0}ms`,
        }}
        >

            <a href="/" className="outline-none border-none"> 
            {title}
            </a>
        </li>
        ))
    }
   </ul>
   <button className={
    clsx("relative   group overflow-hidden max-md:delay-1000 capitalize text-white py-3 px-5 rounded-lg p3 max-md:bg-primary max-md:w-[calc(100%-32px)] bg-white/10 max-md:hover:bg-primary/90 hover:bg-white/20 transition-all duration-300",
        isOpen?'opacity-100':'max-md:opacity-0'
    )
   }
 
   >
    sign up
    <div className="absolute h-64 w-2 bg-white/30 -top-2 -left-8 max-md:group-hover:translate-x-[600px] group-hover:translate-x-48 transition-all duration-500 rotate-12"/>
   </button>
   </nav>
   
  <button className=" items-center hidden max-md:flex">
  <Hamburger isOpen={isOpen} setIsOpen={(isOpen)=>{setIsOpen(isOpen)}}/>
  </button>
   </div>
   </motion.header>
  )
}

export default Header
