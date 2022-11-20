import React, { useEffect, useRef, useState } from "react"

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
import Tes from "../header/Tes"
import Testdos from "../header/Testdos"
import MainSectioncopy from "../sections/MainSectioncopy"
import Name from "../sections/Name"

const Layout = () => {
  const scrollRef = useRef(0)
  const refs = {
    homeRef: useRef(),
    hardRef: useRef(),
    softRef: useRef(),
    projectRef: useRef(),
  }
  const { homeRef, hardRef, softRef, projectRef } = refs

  const { scrollY } = useScroll({
    container: refs.softRef,
  })
  //const p = refs.softRef.current.getBoundingClientRect().y
  //console.log("=======", refs.softRef.current.getBoundingClientRect())
  /*
   if (scrollRef.current) {
    scrollRef.addEventListener("wheel", ()=>1)
  }
  */
  const [a, seta] = useState(0)
  useEffect(() => {
    //console.log("---------------------", a.current)
    // seta(refs.softRef.current.getBoundingClientRect().y)
    console.log("+++++++++++++++++++++", refs.hardRef.current.offsetHeight)
    console.log("+++++++++++++++++++++", refs.softRef.current.offsetHeight)
    console.log("+++++++++++++++++++++", window.screen.height)
    console.log("+++++++++++++++++++++", window.screen.availHeight)
    // window.scrollTo(0, refs.softRef.current.getBoundingClientRect().y)
  }, [])

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

  const handleWheel = refIndex => ev => {
    const refsMap = [homeRef, hardRef, softRef, projectRef]

    if (ev.deltaY > 0 && refIndex >= 0 && refIndex < 3) {
      console.log("+++++++++++++++++++++++++++++++")
      refsMap[refIndex + 1].current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      })
    }
    if (ev.deltaY < 0 && refIndex > 0 && refIndex <= 3) {
      console.log("------------------------------------")
      refsMap[refIndex - 1].current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      })
    }
    // console.log(refsMap[refIndex + 1].current)
    console.log(refs.hardRef)
    //positivo  cuando ruedas abajo, negativo arriba

    //ev.preventDefault()
    //ev.deltaY = 500
    //console.log("-----------", ref)
    console.log("@@@@@@@@@@@", ev.deltaY)

    // return refs.projectRef.current.scrollIntoView()
    // window.scrollTo(0, a)
    //window.scrollBy(0, refs.hardRef.current.offsetHeight)
    //refs.hardRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
  }

  return (
    <div id="layout-wrapper" className=" scroll-smooth  bg-black_2 px-4	lg:px-0">
      <HeaderV refs={refs} buttonColor={hashColors} />
      <PagePhoto />
      <div className="lg:hidden">
        <MobileHomeSection />
        <MobilePhotoSection />
      </div>
      <div
        id="desktop-page-content-wrapper"
        //   className="absolute right-24 border-r border-r-bronze bg-black"
        className="h-screen  lg:absolute lg:right-24 lg:w-[calc(50%-48px)] lg:border-r lg:border-r-bronze lg:bg-black lg:pt-20 2xl:w-[calc(55%-48px)]"
      >
        <Name />

        <div className="h-full overflow-y-hidden  ">
          <MainSection
            ref={homeRef}
            handleWheel={handleWheel(0)}
            addToClass={"hidden lg:block  "}
          />

          <HardSkillsSection
            id={"hard-section"}
            ref={hardRef}
            handleWheel={handleWheel(1)}
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
            id={"soft-section"}
            ref={softRef}
            handleWheel={handleWheel(2)}
            anchorName="soft-skills-sections"
            handleOnViewportEnter={() =>
              handleOnViewportEnter("soft-skills-sections")
            }
            handleOnViewportLeave={() =>
              handleOnViewportLeave("soft-skills-sections")
            }
            viewport={{ amount: "all" }}
          />
          {/* <Testdos testProp={"eeeeee"} ref={scrollRef} />*/}
          <ProjectsSection
            id={"project-section"}
            ref={refs.projectRef}
            handleWheel={handleWheel(3)}
            handleOnViewportEnter={() =>
              handleOnViewportEnter("projects-section")
            }
            handleOnViewportLeave={() =>
              handleOnViewportLeave("projects-section")
            }
            viewport={{ amount: 0.5 }}
            anchorName="projects-section"
          />
          <Social />

          <Footer />
        </div>
      </div>

      <Sidebar />
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
