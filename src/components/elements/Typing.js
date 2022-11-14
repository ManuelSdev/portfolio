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

export default Typing
