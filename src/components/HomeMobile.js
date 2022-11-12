import React from "react"
import HeaderMobile from "./header/HeaderMobile"
import PagePhoto from "./PagePhoto"
import MainSection from "./sections/MainSection"

const HomeMobile = () => {
  return (
    <div className="h-screen">
      <HeaderMobile />
      <PagePhoto />
      <MainSection />
    </div>
  )
}

export default HomeMobile
