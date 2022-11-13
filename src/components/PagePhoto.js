import React from "react"
import me from "../images/me.jpg"
const PagePhoto = ({ addToClass }) => {
  return (
    <div
      id="photo-wrapper"
      // className="fixed left-0 flex h-screen bg-bronze"
      className=" w-[95%] max-w-[510px]  flex-none bg-bronze bg-center
      lg:fixed
      lg:left-0
      lg:top-20 lg:h-full lg:w-[calc(50%_-_48px)] lg:max-w-none 
    lg:bg-cover   2xl:w-[calc(45%_-_48px)]"
    >
      <div
        className="h-full bg-cover bg-top bg-no-repeat mix-blend-luminosity 2xl:h-screen"
        style={{ backgroundImage: `url(${me})` }}
      ></div>
    </div>
  )
}

export default PagePhoto

//     sm:relative sm:top-0 sm:left-0 sm:h-full
/**
 


  className=" w-[95vw] bg-bronze bg-center 
      min-[550px]:w-[85vw]
      sm:w-[75vw]
 */
