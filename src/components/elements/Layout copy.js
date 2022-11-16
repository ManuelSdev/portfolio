import React from "react"

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

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Layout = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0, x: 200 },
  }
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    }
  }, [control, inView])
  return (
    <div id="layout-wrapper" className=" scroll-smooth  bg-black_2 px-4	lg:px-0">
      <HeaderV />
      <PagePhoto />
      <div className="lg:hidden">
        <MobileHomeSection />
        <MobilePhotoSection />
      </div>
      <motion.div
        ref={ref}
        className="box"
        initial="hidden"
        animate={control}
        variants={boxVariant}
      >
        <h1 className="text-white">Boxsssssssssssssss</h1>
      </motion.div>
      <div
        id="desktop-page-content-wrapper"
        //   className="absolute right-24 border-r border-r-bronze bg-black"
        className="lg:absolute lg:right-24 lg:w-[calc(50%-48px)] lg:border-r lg:border-r-bronze lg:bg-black 2xl:w-[calc(55%-48px)]"
      >
        <MainSection addToClass={"hidden lg:block  "} />
        <HardSkillsSection
          anchorName="hard-skills-sections"
          addClasses="border-t-[1px] border-t-bronze"
        />
        <SoftSkillsSections anchorName="soft-skills-sections" />
        <ProjectsSection anchorName="projects-section" />
        <Social />
        <Footer />
      </div>

      <Sidebar />
    </div>
  )
}

export default Layout
