import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import BackIcon from "../assets/svg/arrow-left.svg"
import MiningIcon from "../assets/svg/mining.svg"

const Menu = ({ onClose, classes }) => {
  const sectionNames = ["Inicio", "Hard skills", "Soft skills", "Proyectos"]
  const handleClickOutside = ev => {
    console.log("event.target", ev.target.classList)
    // if (!!!ev.target.class || !ev.target.class.includes("no-close-modal"))
    onClose()
  }

  const a = ev => {
    console.log("---------")
    ev.stopPropagation()
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
        onClick={a}
        id="menu-wrapper"
        className={
          "no-close-modal absolute top-0 right-0 left-[25%]   h-screen translate-x-[100%]   bg-black_2 text-black transition-transform duration-[0.6s] ease-[ease] " +
          classes.wrapper
        }
      >
        <div>
          <div className="no-close-modal flex justify-end border-b-[1px] border-bronze  fill-bronze pt-4 pb-4 pr-4">
            <BackIcon
              width="60px"
              height="60px"
              viewBox="0 0 1000 1000"
              className="  "
              onClick={handleClickOutside}
            />
          </div>

          {sectionNames.map(name => (
            <div
              className="no-close-modal p-6no-underline border-b-[1px] border-bronze"
              key={name}
            >
              <a
                href="#projects-section"
                className=" font-bold  uppercase text-bronze no-underline"
              >
                {name}
              </a>
            </div>
          ))}
        </div>
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
