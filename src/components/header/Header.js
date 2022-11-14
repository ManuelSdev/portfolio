import React from "react"

import { sectionsMap } from "../../assets/js/tools"
import DrawerButton from "./DrawerButton"

const Header = () => {
  const handleClick = hash => ev => {
    const element = document.getElementById(hash)
    element.scrollIntoView()
  }

  return (
    <div
      id="header"
      className=" fixed top-0 left-0 right-0 z-10 flex h-20 items-center bg-black px-4 py-5 shadow-md lg:border-b-bronze lg:px-5 lg:py-7 lg:shadow-bronze"

      // className=" fixed top-0 left-0 right-0  z-10 border-b-bronze  bg-black shadow-md shadow-bronze"
    >
      <div
        id="kkskks"
        className="flex grow flex-row justify-between text-xl text-bronze"
      >
        <div className="font-bold">Manuel Sánchez</div>
        <div className=" flex flex-row   justify-around">
          <div
            id="top-menu"
            className=" hidden flex-row  justify-around lg:flex"
          >
            {sectionsMap.map((section, index) => {
              const [name, hash] = section
              return (
                <button
                  className="ml-3 font-bold"
                  onClick={handleClick(hash)}
                  key={index}
                >
                  {name}
                </button>
              )
            })}
            <a
              className="ml-5  text-bronze no-underline"
              href="https://drive.google.com/uc?export=download&id=1kVuLuDyyNujt7AIrsku8dCNN0x_wZJU8"
            >
              <strong>Descargar CV</strong>
            </a>
          </div>

          <DrawerButton />
        </div>
      </div>
    </div>
  )
}

export default Header