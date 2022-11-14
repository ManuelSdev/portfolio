import React from "react"
import PagePhoto from "../elements/PagePhoto"
import MainSection from "./MainSection"
import Name from "./Name"

const MobileHomeSection = () => {
  return (
    <div
      id="photo-main-section-wrapper"
      className="h-screen border-b border-b-bronze bg-red-300 pt-20 lg:hidden"
    >
      <div className="flex h-[115vw] max-h-[600px]  w-full ">
        <PagePhoto />
        <div className="relative top-0 right-0  h-full w-[5%%] grow bg-black ">
          <Name />
        </div>
      </div>
      <MainSection />
    </div>
  )
}

export default MobileHomeSection
