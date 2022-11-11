import React from "react"
import Header from "./Header"
import HeaderMobile from "./HeaderMobile"
import HomeMobile from "./HomeMobile"
import PageInfo from "./PageInfo"
import PagePhoto from "./PagePhoto"
import MainSection from "./sections/MainSection"
import ProjectsSection from "./sections/ProjectsSection"
import HardSkillsSection from "./sections/HardSkillsSection"
import Sidebar from "./Sidebar"
import SoftSkillsSections from "./sections/SoftSkillsSections"
import Footer from "./Footer"

const LayoutMobile = () => {
  return (
    <div className=" bg-black_3 px-4">
      <HeaderMobile addToClass={"fixed px-4"} />
      <div className="h-screen">
        <HeaderMobile addToClass={"invisible px-4"} />
        <PagePhoto />
        <MainSection />
      </div>

      <HardSkillsSection id="hard-skills-sections" />
      <SoftSkillsSections id="soft-skills-sections" />
      <ProjectsSection id="projects-section" />
      <Footer />
      <Sidebar />
    </div>
  )
}

export default LayoutMobile
