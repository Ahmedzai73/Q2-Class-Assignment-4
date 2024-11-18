import { RxCross2 } from "react-icons/rx";

export default function TopHeader() {
  return (
    <div className="container mx-auto bg-red-400 w-full h-[34px]">
    <div className="w-xs sm:w-md flex h-[34px] items-center justify-center bg-black text-xs md:h-[38px]">
      <h1 className="text-center font-bold text-white">Sign up and get 20% off to your first order. <button className="underline underline-offset-4">Sign Up Now</button></h1>
      <div className="crossButton text-white text-lg absolute 2xl:right-[104px] lg:right-[104px] md:right-[104px] sm:right-[104px] hidden xs:flex "><RxCross2/></div>
   </div>
    
  </div>
  )
}
