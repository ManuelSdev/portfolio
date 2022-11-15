import React from "react"
import PagePhoto from "../elements/PagePhoto"
import SectionContent from "./SectionContent"
import me from "../../images/me.jpg"
const MobilePhotoSection = () => {
  return (
    <SectionContent anchorName="mobile-photo-section" title="Sobre mí">
      <div id="dale" className="flex w-full flex-col items-center  pb-10">
        <div
          id="photo-wrapper"
          // className="fixed left-0 flex h-screen bg-bronze"
          className=" h-[58vw] w-[50vw] rounded-3xl   border-black bg-bronze bg-center
    
    "
        >
          <div
            className="h-full rounded-3xl border-[1px] border-black bg-cover  bg-top bg-no-repeat mix-blend-luminosity 2xl:h-screen"
            style={{ backgroundImage: `url(${me})` }}
          ></div>
        </div>
        <div className="max-w-[50vw] pt-5 text-justify">
          Desarrollador web full stack especializado en JavaScript. Entusiasta
          de la programación, las matemáticas, la lectura y el deporte.
        </div>
      </div>
    </SectionContent>
  )
}

export default MobilePhotoSection
