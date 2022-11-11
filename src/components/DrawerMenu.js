import React from "react"

const DrawerMenu = () => {
  return (
    <div
      onClick={handleClickOutside}
      //  id="father"
      className={
        "absolute top-0 left-[100%] -right-[55%] h-screen bg-black/70 "
      }
    >
      {/** <div
         ***
        id="menu-wrapper"
        className="absolute top-0 right-0 left-[30%] flex h-screen  justify-end bg-white text-black"
      >
        <BackIcon
          width="70px"
          height="70px"
          viewBox="0 0 1000 1000"
          className="  fill-black pt-4 pr-4"
        />
      </div>
    */}
    </div>
  )
}

export default DrawerMenu
