import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"
import Typing from "../elements/Typing"
import Name from "./Name"

const MainSection = ({ addToClass }) => {
  const { lg } = useBreakpoint()
  return (
    <div
      id="main-section-wrapper"
      className={
        ` pt-4 font-sans        
        lg:flex lg:h-screen lg:flex-col lg:justify-center   lg:py-5 ` +
        addToClass
      }
    >
      {lg && <Name />}
      <div
        className="text-white 
        lg:max-w-lg lg:pl-[8%]"
      >
        <div className="pb-2 font-semibold lg:pb-5">
          <Typing />
        </div>
        <div>
          Hello! I am Web Developer from United States, New York. I have rich
          experience in web site design and building, also I am good at
          wordpress. I love to talk with you about our unique
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
