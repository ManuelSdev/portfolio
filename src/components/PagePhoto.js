import React from "react"

const PagePhoto = ({ addToClass }) => {
  return (
    <div
      id="page-photo"
      // className="fixed left-0 flex h-screen bg-bronze"
      className="h-[65%] bg-bronze bg-center 
    2xl:fixed 2xl:left-0 2xl:top-20 2xl:h-full 2xl:w-[calc(45%_-_48px)] 2xl:bg-cover"
    >
      <div className="h-full bg-hero bg-cover bg-top  bg-no-repeat mix-blend-luminosity 2xl:h-screen"></div>
    </div>
  )
}

export default PagePhoto
