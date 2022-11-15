import React from "react"
import DrawerMenu from "./DrawerMenu"
import { useState } from "react"
const DrawerButton = () => {
  const [classes, setClasses] = useState({
    overlay: "",
    wrapper: "",
  })

  const onOpen = () => {
    console.log("###########")
    setClasses({
      overlay: " translate-x-0 ",
      wrapper: " translate-x-0 delay-[0.5s] ",
    })
  }
  const onClose = () => {
    setClasses({
      overlay: " translate-x-full delay-[0.5s] ",
      wrapper: " translate-x-full ",
    })
  }

  return (
    <div id="drawer-button" className="lg:hidden">
      <i
        id="drawer-menu-button"
        className="icofont-navigation-menu text-bronze"
        onClick={onOpen}
      ></i>
      <DrawerMenu onClose={onClose} classes={classes} />
    </div>
  )
}

export default DrawerButton
