import  { ReactNode } from 'react'

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-white group border border-[#1D1C31]/10   hover:shadow-sm rounded-md hover:scale-105 transition-all duration-500'>
      {children}
    </div>
  )
}

export default Card
