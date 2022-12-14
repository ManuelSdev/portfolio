import React from "react"
import BackIcon from "../../assets/svg/arrow-left.svg"
import { sectionsMap } from "../../assets/js/tools"

const DrawerMenu = ({ onClose, translate }) => {
  const handleClickOutside = ev => {
    console.log("handleClickOutside")
    // if (!!!ev.target.class || !ev.target.class.includes("no-close-modal"))
    onClose()
  }

  const handleMenuClick = hash => ev => {
    console.log("@@@@@@@@@@@@@", hash)
    const element = document.getElementById(hash)
    console.log("****************", element)
    element.scrollIntoView()
    onClose()
  }

  const handleBubble = ev => {
    ev.stopPropagation()
  }
  return (
    <div
      onClick={handleClickOutside}
      id="overlay"
      className={
        "absolute right-0 top-0 left-0 z-20 h-screen  bg-black/70 transition-transform duration-[0.6s] ease-[ease] " +
        translate.overlay
      }
    >
      <div
        onClick={handleBubble}
        id="menu-wrapper"
        className={
          "absolute top-0 right-0 left-[calc(100%-300px)] h-screen  bg-black_2 text-black transition-transform duration-[0.6s] ease-[ease] " +
          translate.wrapper
        }
      >
        <div className="text-sm">
          <div className="flex justify-end border-b-[1px] border-bronze fill-bronze pt-4 pb-4 pr-4">
            <button
              className="icofont-close text-3xl text-bronze"
              onClick={handleClickOutside}
            />
          </div>
          {sectionsMap.map(section => {
            const [name, hash] = section
            return (
              <div
                className="border-b-[1px] border-bronze placeholder:no-underline"
                key={name}
              >
                <button
                  //to={path}
                  //replace
                  //href={path}
                  onClick={handleMenuClick(hash)}
                  className=" block p-6 font-bold uppercase text-bronze no-underline"
                >
                  {name}
                </button>
              </div>
            )
          })}
          <a
            className="block border-b-[1px] border-bronze p-6 font-bold uppercase text-bronze no-underline"
            href="https://drive.google.com/uc?export=download&id=1kVuLuDyyNujt7AIrsku8dCNN0x_wZJU8"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default DrawerMenu
