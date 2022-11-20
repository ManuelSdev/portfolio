import React, { forwardRef } from "react"
import Typing from "../elements/Typing"
import Name from "./Name"

const MainSectioncopy = forwardRef(({ handleWheel, addToClass }, ref) => {
  return (
    <div
      //  onWheel={handleWheel}
      ref={ref}
      id="main-section-wrapper"
      className={
        ` h-[calc(100vh_-_5rem)] pt-4        
        font-sans lg:flex lg:flex-col lg:justify-center   lg:py-5 ` + addToClass
      }
    >
      <div className="hidden lg:block">
        <Name />
      </div>
    </div>
  )
})
export default MainSectioncopy
