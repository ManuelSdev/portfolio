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
import Social from "./Social"
import SoftSkillsSections from "./sections/SoftSkillsSections"
import Footer from "./Footer"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import Name from "./sections/Name"

const LayoutMobile = () => {
  const { sm, md, lg } = useBreakpoint()
  console.log(useBreakpoint())

  return (
    <div id="layout-wrapper" className=" scroll-smooth  bg-black_3 px-4	">
      <HeaderMobile addToClass={"fixed px-4"} />
      {lg ? (
        <PagePhoto />
      ) : sm ? (
        <div
          id="photo-main-section-wrapper"
          className="h-screen border-b border-b-bronze bg-red-300"
        >
          <HeaderMobile addToClass={"invisible px-4 "} />
          <div className="flex h-full">
            <PagePhoto />
            <div className="relative top-0 right-0  h-[65%] w-[30%] bg-black">
              <Name />
            </div>
          </div>
        </div>
      ) : (
        <div
          id="photo-main-section-wrapper"
          className="h-screen border-b border-b-bronze"
        >
          <HeaderMobile addToClass={"invisible px-4 "} />
          <PagePhoto />
          <MainSection />
        </div>
      )}

      <div
        id="desktop-page-content-wrapper"
        //   className="absolute right-24 border-r border-r-bronze bg-black"
        className="lg:absolute lg:right-24 lg:w-[calc(50%-48px)] lg:border-r lg:border-r-bronze lg:bg-black"
      >
        <MainSection addToClass={"hidden lg:block"} />
        <HardSkillsSection id="hard-skills-sections" />
        <SoftSkillsSections id="soft-skills-sections" />
        <ProjectsSection id="projects-section" />
        <Social />
        <Footer />
      </div>

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
