
const Avatar = ({image}:{image:string}) => {
  return (
    <div className='rounded-full size-20 border-2 shadow-lg border-white  overflow-hidden flex justify-center items-center'>
       <img className='object-contain' src={image}/>
    </div>
  )
}

export default Avatar
