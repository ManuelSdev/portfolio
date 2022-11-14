import React from "react"
import { sectionsMap } from "../../assets/js/tools"
import DrawerButton from "./DrawerButton"

const TopMenu = () => {
  const handleMenuClick = hash => ev => {
    const element = document.getElementById(hash)
    element.scrollIntoView()
  }
  return (
    <div id="top-menu" className="flex  flex-row justify-around">
      <div className=" flex flex-row justify-around">
        {sectionsMap.map((section, index) => {
          const [name, hash] = section
          return (
            <button
              className="ml-3 font-bold"
              onClick={handleMenuClick(hash)}
              key={index}
            >
              {name}
            </button>
          )
        })}
      </div>
      <a
        className="ml-5  text-bronze no-underline"
        href="https://drive.google.com/uc?export=download&id=1kVuLuDyyNujt7AIrsku8dCNN0x_wZJU8"
      >
        <strong>Descargar CV</strong>
      </a>
      <DrawerButton />
    </div>
  )
}

export default TopMenu
