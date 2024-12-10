import clsx from "clsx"


const Logo = ({isOpen}:{isOpen:boolean}) => {
  return (
    <a href="/" className={clsx("text-[24px] outline-none border-none font-semibold font-poppins  cursor-pointer transition-all delay-300",isOpen?'text-black absolute z-50  ':'text-white')}>
        LegacyLine.
    </a>
  )
}

export default Logo
