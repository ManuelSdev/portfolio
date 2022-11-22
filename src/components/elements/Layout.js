import React, { useRef, useState } from "react"

import PagePhoto from "./PagePhoto"
import MainSection from "../sections/MainSection"
import ProjectsSection from "../sections/ProjectsSection"
import HardSkillsSection from "../sections/HardSkillsSection"
import Sidebar from "./Sidebar"
import Social from "./Social"
import SoftSkillsSections from "../sections/SoftSkillsSections"
import Footer from "./Footer"
import HeaderV from "../header/Header"
import MobileHomeSection from "../sections/MobileHomeSection"
import MobilePhotoSection from "../sections/MobilePhotoSection"

import { motion, useAnimation, useScroll } from "framer-motion"

import { sectionsMap } from "../../assets/js/tools"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

const Layout = () => {
  const [headerVisibility, setheaderVisibility] = useState("second")
  const hashColorObjectMap = sectionsMap.reduce((acc, element) => {
    const [sectionName, sectionHash] = element
    return { ...acc, [sectionHash]: "text-bronze" }
  }, {})

  const [hashColors, setHashColors] = useState({ ...hashColorObjectMap })

  const handleOnViewportEnter = anchorName => {
    setHashColors({ ...hashColors, [anchorName]: "text-white" })
  }

  const handleOnViewportLeave = anchorName =>
    setHashColors({ ...hashColors, [anchorName]: "text-bronze" })

  const viewport = { amount: "all" }

  const props = {
    handleOnViewportEnter,
    handleOnViewportLeave,
    viewport,
  }

  return (
    <div id="layout-wrapper" className=" scroll-smooth  bg-black px-4	lg:px-0">
      <HeaderV buttonColor={hashColors} />
      <PagePhoto />
      <div className="lg:hidden">
        <MobileHomeSection />
        <MobilePhotoSection />
      </div>
      <div
        id="desktop-page-content-wrapper"
        //   className="absolute right-24 border-r border-r-bronze bg-black"
        className="lg:absolute lg:right-24 lg:w-[calc(50%-48px)] lg:border-r lg:border-r-bronze lg:bg-black 2xl:w-[calc(55%-48px)]"
      >
        <MainSection addToClass={"hidden lg:block  "} />
        <HardSkillsSection
          addClasses="border-t-[1px] border-t-bronze"
          anchorName="hard-skills-sections"
          handleOnViewportEnter={() =>
            handleOnViewportEnter("hard-skills-sections")
          }
          handleOnViewportLeave={() =>
            handleOnViewportLeave("hard-skills-sections")
          }
          viewport={{ amount: "all" }}
        />
        <SoftSkillsSections
          anchorName="soft-skills-sections"
          handleOnViewportEnter={() =>
            handleOnViewportEnter("soft-skills-sections")
          }
          handleOnViewportLeave={() =>
            handleOnViewportLeave("soft-skills-sections")
          }
          viewport={{ amount: "all" }}
        />
        <ProjectsSection
          handleOnViewportEnter={() =>
            handleOnViewportEnter("projects-section")
          }
          handleOnViewportLeave={() =>
            handleOnViewportLeave("projects-section")
          }
          viewport={{ amount: 0.5 }}
          anchorName="projects-section"
        />
        <Sidebar />
        <Footer />
      </div>
    </div>
  )
}

export default Layout

/**
    <motion.div
          onViewportEnter={t}
          onViewportLeave={() => console.log("+++++++++++++++++++++++++++++++")}
          viewport={{ amount: "all" }}
          className="h-[500px] bg-slate-100 p-10"
        >
          HOLAAAAAAAAAAAA
        </motion.div>
 */
