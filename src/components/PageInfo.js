import React from "react"
import AboutMeSection from "./sections/AboutMeSection"
import MainSection from "./sections/MainSection"
import ProjectsSection from "./sections/ProjectsSection"
import HardSkillsSection from "./sections/HardSkillsSection"

const PageInfo = () => {
  return (
    <div
      id="page-info"
      className=" bg-black 
    2xl:absolute 2xl:right-24 2xl:w-[calc(55%_-_48px)] 2xl:border-r 2xl:border-r-bronze"
    >
      <div
        id="page-info-sections"
        //  className="overflow-y-auto px-5"
      >
        <MainSection />
        <AboutMeSection />
        <HardSkillsSection />
        <ProjectsSection />
      </div>
    </div>
  )
}

export default PageInfo
