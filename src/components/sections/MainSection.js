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
    <div className="flex  h-screen flex-col justify-center  py-5 font-sans">
      <div className="-ml-48 rounded-l-full bg-black p-20 font-serif text-8xl text-bronze">
        <div>Manuel</div>
        <div>Sánchez</div>
      </div>
      <div className="max-w-lg text-white" style={{ paddingLeft: "8%" }}>
        <div className="pb-5 font-semibold">
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
