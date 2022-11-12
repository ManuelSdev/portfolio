import React from "react"
import Header from "./Header"
import HeaderMobile from "./header/HeaderMobile"
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
  console.log(window.location.hash)
  return (
    <div id="main-section" className=" scroll-smooth  bg-black_3 px-4	">
      <HeaderMobile addToClass={"fixed px-4"} />
      <div className="h-screen border-b border-b-bronze">
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

/**
 history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  )
 */
