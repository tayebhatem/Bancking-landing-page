import { ReactNode } from "react"


const Button = ({children}:{children:ReactNode}) => {
  return (
   <button className="bg-white max-sm:w-full group relative overflow-hidden px-6 py-4 rounded-lg hover:shadow-xl hover:shadow-primary transition-all duration-500">

   <span className="p3 lg:p1">
   {children}
   </span>

   </button>
  )
}

export default Button
