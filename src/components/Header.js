import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { sectionsMap } from "../assets/js/tools"

const HeaderButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="ml-3">
      <strong>{children}</strong>
    </button>
  )
}

const Header = () => {
  const handleMenuClick = hash => ev => {
    console.log("@@@@@@@@@@@@@", hash)
    const element = document.getElementById(hash)
    element.scrollIntoView()
  }
  return (
    <div
      id="header"
      className=" fixed top-0 left-0 right-0 z-10   h-20  border-b-bronze bg-black shadow-md shadow-bronze"

      // className=" fixed top-0 left-0 right-0  z-10 border-b-bronze  bg-black shadow-md shadow-bronze"
    >
      <div className="flex flex-row justify-between px-5 py-7 text-bronze">
        <div>
          <strong>Manuel Sánchez</strong>
        </div>
        <div className="flex  flex-row justify-around">
          <div className=" flex flex-row justify-around">
            {sectionsMap.map((section, index) => {
              const [name, hash] = section
              return (
                <HeaderButton onClick={handleMenuClick(hash)} key={index}>
                  {name}
                </HeaderButton>
              )
            })}
          </div>
          <a
            className="ml-5  text-bronze no-underline"
            href="https://drive.google.com/uc?export=download&id=1kVuLuDyyNujt7AIrsku8dCNN0x_wZJU8"
          >
            <strong>Descargar CV</strong>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
