import clsx from "clsx"


const Hamburger = ({isOpen,setIsOpen}:{isOpen:boolean,setIsOpen:(isOpen:boolean)=>void}) => {
   

  return (
    <div className="relative w-6 h-5  cursor-pointer block md:hidden  " onClick={()=>setIsOpen(!isOpen)} >
    <div className={clsx("w-6 h-0.5  absolute top-0 left-0 transition-all duration-700",isOpen ? 'rotate-45 translate-y-2 bg-black':'bg-white')}/>
    <div className={clsx("w-4 h-0.5  absolute top-2 right-0 transition-all duration-700",isOpen ? 'opacity-0':'bg-white')}/>
    <div className={clsx("w-6 h-0.5  absolute left-0  transition-all duration-700",isOpen?' top-0 -rotate-45 translate-y-2 bg-black':'top-4 bg-white')}/>
 
  </div>
  )
}

export default Hamburger
