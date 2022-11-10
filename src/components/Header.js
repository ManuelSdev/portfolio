import React from "react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const HeaderButton = ({ children }) => {
  return (
    <div className="ml-3">
      <strong>{children}</strong>
    </div>
  )
}

const titles = ["Inicio", "Sobre mí", "Resumen", "Proyectos", "Contacto"]

const Header = () => {
  return (
    <div
      id="header"
      className="hidden bg-black shadow-md shadow-bronze 2xl:visible 2xl:fixed 2xl:top-0  2xl:left-0 2xl:right-0  2xl:z-10 2xl:flex 2xl:h-20 2xl:border-b-bronze"

      // className=" fixed top-0 left-0 right-0  z-10 border-b-bronze  bg-black shadow-md shadow-bronze"
    >
      <div className="flex flex-row justify-between px-5 py-7 text-bronze">
        <div>
          <strong>Manuel Sánchez</strong>
        </div>
        <div className="flex  flex-row justify-around">
          <div className=" flex flex-row justify-around">
            {titles.map((title, index) => (
              <HeaderButton key={index}>{title}</HeaderButton>
            ))}
          </div>
          <div className="ml-5">
            <strong>Descargar CV</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
