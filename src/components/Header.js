import React from "react"

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
      className="fixed top-0 left-0 right-0 z-10  border-b-bronze bg-black  shadow-md shadow-bronze"
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
