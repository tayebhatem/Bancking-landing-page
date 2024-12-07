import { GoInfinity } from "react-icons/go";

const MasterCard = () => {
  return (
    <div className='w-[220px] h-[150px] lg:w-[290px] lg:h-[190px] p-5 hidden md:flex flex-col justify-between bg-[#0E0A5F]/60 backdrop-blur-sm rounded-2xl absolute top-1/3 left-1/3'>
      <div className='relative'>
      <div className='w-5 h-5 rounded-full bg-[#EB001B]'/>
      <div className='w-5 h-5 rounded-full bg-[#F79E1B]/80 absolute top-0 left-2.5'/>
      </div>
      <div className="flex flex-row gap-x-2 items-center">
        {
            ['****','****','****','****'].map((text,index)=>(
                <span key={index} className="text-white text-sm">{text}</span>
            ))
        }
      </div>
      <div className="flex flex-row justify-between items-end">
        <p className="text-xs font-medium text-white uppercase">
        $1000 000 Limit
        </p>
        <div className="space-y-1"> 
            <p className="text-[10px] text-white font-extralight uppercase">Valid Till</p>
            <div className="flex flex-row items-center gap-x-2">
            <p className="text-white text-sm">+</p>
            <GoInfinity size={16} className="text-white" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MasterCard
