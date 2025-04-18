import React from 'react'

const Cards = () => {
  return (
<div className=' flex w-full flex-col md:flex-row  '>
        <a className="group relative md:w-1/3 w-full flex flex-col border border-gray-200 rounded-lg px-8 pb-8 pt-60 max-w-sm mx-auto mt-22 overflow-hidden">
        <img src="/public/banner-01.jpg" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="bg-[rgba(103,117,214,0.8)] duration-300 opacity-0 group-hover:opacity-80 absolute w-full h-full top-0 left-0 z-50"></div>
        <div className="absolute top-5 left-5 z-50">
        <h3 className="text-3xl font-bold text-black group-hover:text-white">Women</h3>
        <div className="text-sm text-[#555] group-hover:text-white">Spring 2025</div>
        <div className="absolute top-40 left-2 transform -translate-x-1 z-50 opacity-0 group-hover:opacity-100 transition duration-2000">
    <span className="text-white text-base font-semibold underline  underline-offset-4">SHOP NOW</span>
  </div>
        </div>
    </a>


    <a className="group relative md:w-1/3 w-full flex flex-col border border-gray-200 rounded-lg px-8 pb-8 pt-60 max-w-sm mx-auto mt-22 overflow-hidden">
        <img src="/public/banner-02.jpg" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="bg-[rgba(103,117,214,0.8)] duration-300 opacity-0 group-hover:opacity-80 absolute w-full h-full top-0 left-0 z-50"></div>
        <div className="absolute top-5 left-5 z-50">
        <h3 className="text-3xl font-bold text-black group-hover:text-white">Men</h3>
        <div className="text-sm text-[#555] group-hover:text-white">Spring 2025</div>
        <div className=" absolute w-[200px] top-40 left-2 transform-translate-x-1 z-50 opacity-0 group-hover:opacity-100 transition duration-2000">
        <span className="text-white text-base font-semibold underline  underline-offset-4">SHOP NOW</span>
         </div>
        </div>
    </a>


    <a className="group relative md:w-1/3 w-full flex flex-col border border-gray-200 rounded-lg px-8 pb-8 pt-60 max-w-sm mx-auto mt-22 overflow-hidden">
        <img src="/public/banner-03.jpg" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="bg-[rgba(103,117,214,0.8)] duration-300 opacity-0 group-hover:opacity-80 absolute w-full h-full top-0 left-0 z-50"></div>
        <div className="absolute top-5 left-5 z-50">
        <h3 className="text-3xl font-bold text-black  group-hover:text-white">Men</h3>
        <div className="text-sm text-[#555] group-hover:text-white">Spring 2025</div>
        <div className=" absolute w-[200px] top-40 left-2 transform-translate-x-1 z-50 opacity-0 group-hover:opacity-100 transition duration-2000">
        <span className="text-white text-base font-semibold underline  underline-offset-4">SHOP NOW</span>
         </div>
         </div>
    </a>
    
</div>
  )
}

export default Cards