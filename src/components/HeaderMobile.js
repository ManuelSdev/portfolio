import React from "react"

const HeaderMobile = ({ addToClass }) => {
  return (
    <div
      id="header-mobile"
      className={`${addToClass} top-0 left-0 right-0 z-10 bg-black py-4 `}
    >
      <div className="flex flex-row items-center justify-between  text-3xl  text-bronze">
        <div id="name-wrapper" className="font-serif ">
          <strong>Manuel Sánchez</strong>
        </div>
        <i className="icofont-navigation-menu "></i>
      </div>
    </div>
  )
}

export default HeaderMobile
