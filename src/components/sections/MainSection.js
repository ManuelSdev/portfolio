import React from "react"
import Typewriter from "typewriter-effect"

const Typing = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "FULL STACK WEB DEVELOPER",
          "WEB DESIGNER",
          "AND SOON DEVOPS ARCHITECT",
        ],
        autoStart: true,
        loop: true,
        delay: 35,
        deleteSpeed: 30,
      }}
    />
  )
}

const MainSection = () => {
  return (
    <div
      id="main-section-wrapper"
      className="pt-4 font-sans 2xl:flex 2xl:h-screen 2xl:flex-col 2xl:justify-center  2xl:px-[8%] 2xl:py-5"
    >
      <div
        className="text-white 
        2xl:max-w-lg 2xl:pl-[8%]"
      >
        <div className="pb-2 font-semibold 2xl:pb-5">
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
