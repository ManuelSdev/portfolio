import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import BackIcon from "../assets/svg/arrow-left.svg"
import MiningIcon from "../assets/svg/mining.svg"

const Menu = ({ onClose, classes }) => {
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
      id="overlay"
      className={
        "absolute right-0 top-0 left-0 h-screen translate-x-[100%] bg-black/70 transition-transform duration-[0.6s] ease-[ease] " +
        classes.overlay
      }
    >
      <div
        id="menu-wrapper"
        className={
          "absolute top-0 right-0 left-[30%]  flex h-screen translate-x-[100%]  justify-end bg-white text-black transition-transform duration-[0.6s] ease-[ease] " +
          classes.wrapper
        }
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
  const [classes, setClasses] = useState({
    overlay: "",
    wrapper: "",
  })
  const [a, setA] = useState("")
  const onOpen = () => {
    setClasses({
      overlay: "translate-x-[0]",
      wrapper: "translate-x-[0] delay-[0.6s] ",
    })
  }
  const onClose = () => {
    setClasses({
      overlay: "translate-x-full delay-[0.5s]",
      wrapper: "translate-x-full",
    })
  }

  return (
    <div
      id="header-mobile"
      className={`${addToClass} top-0 left-0 right-0 z-10 w-screen bg-black py-4`}
    >
      <div className="">
        <div className="flex flex-row items-center justify-between  text-3xl  text-bronze">
          <div id="name-wrapper" className="font-serif ">
            <strong>Manuel Sánchez</strong>
          </div>
          <i className="icofont-navigation-menu" onClick={onOpen}></i>
        </div>
        <Menu onClose={onClose} classes={classes} a={a} />
      </div>
    </div>
  )
}

export default HeaderMobile
