import Button from "../components/button"
import { logos, statistics } from "../constants"
import mockupSvg from '../assets/images/mockup.svg'
import MasterCard from "../components/MasterCard"

const Hero = () => {
  return (
   <section className='relative g1 pt-20 space-y-20 max-md:py-10 '>
     <div className='container  mx-auto grid md:grid-cols-2  '>
   <div className="space-y-8 ">
      <h1 className='  max-md:text-center text-left h3  lg:h2 xl:h1   text-white leading-tight'>
      Discover Financial Freedom with LegacyLine
      </h1>
    <p className="p2 max-md:text-center text-left  text-neutral-meduim">
    Welcome to our bank's website, where we provide secure financial solutions tailored to meet your unique needs.
    </p>
   <div className="flex flex-row flex-wrap items-center max-md:justify-center gap-4">
   <Button>
    <span className="text-[#110C64]  ">
    Open Bank Account
    </span>
    </Button>
    <a className="text-white p3 max-sm:w-full text-center lg:p1 px-6 py-4 rounded-lg cursor-pointer border border-white/20">
    Learn More
    </a>
   </div>
   <ul className="flex flex-row gap-x-4 items-center max-md:justify-center ">
    {
        statistics.map(({title,text})=>(
            <li className="space-y-4">
                <h3 className="h4 lg:h3 text-white max-md:text-center">
             {title}
                </h3>
                <p className="p4 lg:p2 text-neutral-meduim">
                {text}
                </p>
            </li>
        ))
    }
   </ul>
   </div>
   <div className="flex  justify-center ">
  
  <div className="relative">
  <img src={mockupSvg} alt="mockup"  className="object-contain w-[183px]   lg:w-[267px] hidden md:block "/>
  <MasterCard/>
  </div>

   </div>
    </div>

   <div className="bg-white/20  w-full py-6 hidden md:block ">
   <div className="container mx-auto  flex justify-between  flex-row items-center">
    {
        logos.map(({id,icon})=>(
          <img key={id} src={`/images/${icon}.svg`} className="object-contain"/>
        ))
    }
    </div>
   </div>
 

   </section>
  )
}

export default Hero
