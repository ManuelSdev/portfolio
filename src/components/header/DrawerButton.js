import React from "react"
import DrawerMenu from "./DrawerMenu"
import { useState } from "react"
const DrawerButton = () => {
  const [translate, setTranslate] = useState({
    overlay: " translate-x-full ",
    wrapper: " translate-x-full ",
  })

  const onOpen = () => {
    console.log("###########")
    const element = document.getElementById("overlay")
    console.log("*****************************", element)
    setTranslate({
      overlay: " translate-x-0 ",
      wrapper: " translate-x-0 delay-[0.5s] ",
    })
  }
  const onClose = () => {
    setTranslate({
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
      <DrawerMenu onClose={onClose} translate={translate} />
    </div>
  )
}

export default DrawerButton
