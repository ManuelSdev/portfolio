import React from "react"
import Layout from "../components/Layout"
import AboutMeSection from "../components/sections/AboutMeSection"
import MainSection from "../components/sections/MainSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import HardSkillsSection from "../components/sections/HardSkillsSection"
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
        className="
        2xl:absolute  2xl:left-0  2xl:right-0  2xl:h-full"
        style={
          {
            //  top: `${hh}px`,
          }
        }
      >
        <div
          id="page-photo"
          // className="fixed left-0 flex h-screen bg-bronze"
          className="h-[600px] bg-bronze bg-center 
          2xl:fixed 2xl:left-0 2xl:top-20 2xl:h-full 2xl:w-[calc(45%_-_48px)] 2xl:bg-cover"
          style={
            {
              //    top: `${hh}px`,
              //  width: "calc(45% - 48px)",
              //    backgroundSize: "cover",
              //    backgroundPosition: "top center",
            }
          }
        >
          <div
            className="h-full bg-hero bg-cover bg-top  bg-no-repeat mix-blend-luminosity 2xl:h-screen"
            style={
              {
                // backgroundImage: `url(${background})`,
                // backgroundSize: "cover",
                //backgroundPosition: "top center",
                // mixBlendMode: "luminosity",
                //boxSizing: "content-box",
                // backgroundRepeat: "no-repeat",
              }
            }
          ></div>
        </div>

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

        <Sidebar />
      </div>
    </Layout>
  )
}

export default Test
