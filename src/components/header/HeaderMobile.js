import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import DrawerMenu from "./DrawerMenu"

const HeaderMobile = ({ addToClass }) => {
  const [classes, setClasses] = useState({
    overlay: "",
    wrapper: "",
  })

  const onOpen = () => {
    setClasses({
      overlay: "translate-x-[0%]",
      wrapper: "translate-x-[0%] delay-[0.5s] ",
    })
  }
  const onClose = () => {
    setClasses({
      overlay: "translate-x-[100%] delay-[0.5s]",
      wrapper: "translate-x-[100%]",
    })
  }

  return (
    <div className={"top-0 left-0 right-0 z-10   bg-black py-4 " + addToClass}>
      <div className="flex flex-row items-center justify-between  text-3xl  ">
        <Link
          to="/test"
          id="name-wrapper"
          className="font-serif text-bronze no-underline"
        >
          <strong>Manuel Sánchez</strong>
        </Link>
        <i className="icofont-navigation-menu text-bronze" onClick={onOpen}></i>
      </div>
      <DrawerMenu onClose={onClose} classes={classes} />
    </div>
  )
}

export default HeaderMobile
