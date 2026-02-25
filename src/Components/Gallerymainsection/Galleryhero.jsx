import React from 'react'
import './Galleryhero.css'
import { Link } from 'react-router-dom'

const Galleryhero = () => {
  return (
    <div className="gallery-hero relative ">
    <div className="px-[100px]  pt-[100px] md-small:px-[20px] sm-max:px-[20px] ">
      <div className="flex flex-col  mt-[80px]">
        <h1 className="text-[45px] text-[white] font-[600] md-small:text-[32px] sm-max:text-[28px] sm-max:mt-[-50px]">
        Gallery
        </h1>
      </div>
      <div className="h-[50px] w-[200px] bg-[white] absolute bottom-0 right-12 flex items-center justify-center">
        <Link to={"/"}>
          <h2 className="text-[16px] text-[black] sm-max:text-[15px]">
            Home <span className="text-[#ff5603]">/      Gallery</span>
          </h2>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Galleryhero