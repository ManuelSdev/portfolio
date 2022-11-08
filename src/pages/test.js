import React from "react"
import Layout from "../components/Layout"
import AboutMeSection from "../components/sections/AboutMeSection"
import MainSection from "../components/sections/MainSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import SkillsSection from "../components/sections/SkillsSection"
import Sidebar from "../components/Sidebar"

import background from "../images/me.jpg"

const Test = () => {
  const [hh, sethh] = React.useState(20)

  React.useEffect(() => {
    const headerElem = document.querySelector("#header")
    headerElem && console.log("headerElem", headerElem)
    headerElem && sethh(headerElem.offsetHeight)
  }, [])

  const percentage = (total, partial) => (partial * total) / 100
  return (
    <Layout>
      <div
        className="absolute left-0 right-0 h-full"
        style={
          {
            //  top: `${hh}px`,
          }
        }
      >
        <div
          id="page-photo"
          // className="fixed left-0 flex h-screen bg-bronze"
          className="fixed left-0 h-full bg-bronze"
          style={{
            top: `${hh}px`,
            width: "calc(45% - 48px)",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div
            className=" h-screen  bg-bronze"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              mixBlendMode: "luminosity",
              boxSizing: "content-box",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        <div
          id="page-content"
          //   className="absolute right-24 border-r border-r-bronze bg-black"
          className="absolute right-24 border-r border-r-bronze bg-black"
          style={{
            width: "calc(55% - 48px)",
          }}
        >
          <div
            id="page-content-sections"
            //  className="overflow-y-auto px-5"
          >
            <MainSection />
            <AboutMeSection />
            <SkillsSection />
            <ProjectsSection />
          </div>
        </div>

        <Sidebar />
      </div>
    </Layout>
  )
}

export default Test
