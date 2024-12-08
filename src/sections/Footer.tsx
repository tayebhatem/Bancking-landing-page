import { Icon } from "@iconify/react/dist/iconify.js"


const Footer = () => {
  return (
    <section className="pb-10 pt-20 bg-[#EEEEEE]">
        <div className="container mx-auto space-y-12">

        <div className=" grid max-md:grid-cols-1 grid-cols-2 items-center gap-y-10 gap-x-20 ">
        <div className="bg-neutral-dark rounded-lg p-6 space-y-4  ">
        <h3 className="max-sm:h5 h4 text-white">Subscribe to our news letter</h3>
        <p className="text-white/60 max-sm:p5 p4">
        I've been using LegacyLine for several years now, and I couldn't be happier with their services. The mobile banking app they provide.
        </p>

        <div className="flex flex-row flex-wrap  items-center gap-4 ">
          <input type="email" placeholder="Enter your email..." required className="bg-transparent flex-1 py-2 max-sm:p4 outline-none border-x-none border-b border-b-white text-white "/>
          <button className="bg-white flex-1 outline-none rounded-lg px-10 py-3 text-black font-medium max-sm:text-sm hover:shadow-lg">
                Subscribe
          </button>
        </div>
            </div>

<div className="grid grid-cols-2 ">
<div className="space-y-4">
            <h4 className="max-lg:h6  h4">Menu</h4>
            <ul className="space-y-4">
                {
                    ['Home','Services','Open Bank Account'].map((text,index)=>(
                        <li key={index} className="text-neutral-dark/60 cursor-pointer p3 line-clamp-1">
                        <a>{text}</a>
                       
                    </li>
                    ))
                }
            </ul>
            </div>

            <div className="space-y-4">
            <h4 className="max-lg:h6  h4">Help</h4>
            <ul className="space-y-4">
                {
                    ['About us','Contact','Support'].map((text,index)=>(
                        <li key={index} className="text-neutral-dark/60 cursor-pointer p3">
                        <a>{text}</a>
                       
                    </li>
                    ))
                }
            </ul>
            </div>
</div>
        
            </div>    
            <div className="h-[1px] w-full bg-neutral-dark/10"/>
<div className="flex flex-row items-center justify-between max-sm:flex-col gap-y-6 ">
                <p className="p3 text-neutral-dark/60">
                2023. All Rights Reserved
                </p>

                <a href="/" className="p3 text-neutral-dark/60 cursor-pointer">
                Privacy & Policy
                </a>

                <ul className="flex flex-row items-center gap-x-2">
                    {
                        ['ic:baseline-facebook','ic:baseline-telegram','ri:instagram-fill','mdi:twitter'].map((icon,index)=>(
                         <li key={index} className="text-[#B6B3EB] cursor-pointer">
                            <a>
                            <Icon icon={icon} className="size-6"/>
                            </a>
                         </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Footer
