import React from "react"
import { useState } from "react"
import DrawerMenu from "./DrawerMenu"
import TopBar from "./TopBar"

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
    <div
      id="header-wrapper"
      className={"top-0 left-0 right-0 z-10   bg-black py-4 " + addToClass}
    >
      <TopBar onOpen={onOpen} />
      <DrawerMenu onClose={onClose} classes={classes} />
    </div>
  )
}

export default HeaderMobile
