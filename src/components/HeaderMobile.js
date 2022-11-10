import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import BackIcon from "../assets/svg/arrow-left.svg"
import MiningIcon from "../assets/svg/mining.svg"

const Menu = ({ onClose }) => {
  const hijo = e => console.log("hijo+++++++++++++++++", e)
  const padre = e => {
    //  console.log("event.target", e.target)
    console.log("event.currentTarget", e.current.id)
  }
  const handleClickOutside = ev => {
    console.log("event.currentTarget", ev.target.id)
    if (!!!ev.target.id || ev.target.id !== "menu-wrapper") onClose()
  }
  return (
    <div
      onClick={handleClickOutside}
      //  id="father"
      className="absolute top-0 right-0 left-0 h-screen bg-black/70"
    >
      <div
        //onClick={hijo}
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
    </div>
  )
}

const HeaderMobile = ({ addToClass }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return (
    <div
      id="header-mobile"
      className={`${addToClass} top-0 left-0 right-0 z-10 bg-black py-4 `}
    >
      <div className="flex flex-row items-center justify-between  text-3xl  text-bronze">
        <div id="name-wrapper" className="font-serif ">
          <strong>Manuel Sánchez</strong>
        </div>
        <i className="icofont-navigation-menu" onClick={onOpen}></i>
      </div>
      {isOpen && <Menu onClose={onClose} />}
    </div>
  )
}

export default HeaderMobile
