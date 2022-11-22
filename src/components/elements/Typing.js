import React from "react"
import Typewriter from "typewriter-effect"

const Typing = () => {
  return (
    <div id="tipee" className="h-20">
      <Typewriter
        options={{
          strings: [
            "FULL STACK WEB DEVELOPER",
            "WEB DESIGNER",
            "STUDYING DEVOPS & CLOUD <br> COMPUTING BOOTCAMP",
          ],
          autoStart: true,
          loop: true,
          delay: 35,
          deleteSpeed: 30,
        }}
      />
    </div>
  )
}

export default Typing
