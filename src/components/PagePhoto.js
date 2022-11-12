import React from "react"

const PagePhoto = ({ addToClass }) => {
  return (
    <div
      id="photo-wrapper"
      // className="fixed left-0 flex h-screen bg-bronze"
      className=" h-[65%] bg-bronze bg-center 
     sm:relative sm:top-0 sm:left-0 sm:w-[70%] 
      lg:fixed
      lg:left-0 lg:top-20 lg:h-full lg:w-[calc(50%_-_48px)] xl:h-[75%]
    2xl:fixed 2xl:left-0 2xl:top-20 2xl:h-full 2xl:w-[calc(45%_-_48px)] 2xl:bg-cover"
    >
      <div className="h-full bg-hero bg-cover bg-top bg-no-repeat mix-blend-luminosity 2xl:h-screen"></div>
    </div>
  )
}

export default PagePhoto
