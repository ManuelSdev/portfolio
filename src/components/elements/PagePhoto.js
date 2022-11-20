import React from "react"
import me from "../../images/me.jpg"

const PagePhoto = ({ handleWheel }) => {
  return (
    <div
      onScroll={handleWheel}
      id="photo-wrapper"
      // className="fixed left-0 flex h-screen bg-bronze"
      className="relative z-0 w-[95%]  max-w-[510px] flex-none bg-bronze bg-center
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
