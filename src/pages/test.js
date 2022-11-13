import React from "react"
import Layout from "../components/Layout"
import LayoutMobile from "../components/LayoutMobile"
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

  return <LayoutMobile />
}

export default Test
//Resuelve problema fixed-translate que añade width que supone la traslación al elemento fixed
export function Head() {
  return (
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
  )
}
