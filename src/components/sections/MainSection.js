import React from "react"
import Typing from "../elements/Typing"
import Name from "./Name"

const MainSection = ({ addToClass }) => {
  return (
    <div
      id="main-section-wrapper"
      className={
        ` pt-4 font-sans        
        lg:flex lg:h-screen lg:flex-col lg:justify-center   lg:py-5 ` +
        addToClass
      }
    >
      <div className="hidden lg:block">
        <Name />
      </div>

      <div
        className="text-white 
        lg:max-w-lg lg:pl-[8%]"
      >
        <div className="pb-2 font-semibold lg:pb-5">
          <Typing />
        </div>
        <div>
          Desarrollador web full stack especializado en JavaScript. Entusiasta
          de la programación, las matemáticas, la lectura y el deporte.
        </div>
        <div>
          <div>CONTACTO</div>
          <div>BOTON</div>
        </div>
      </div>
    </div>
  )
}
export default MainSection
