import React from "react"
import Layout from "../components/Layout"
import MainSection from "../components/sections/MainSection"

import background from "../images/me.jpg"

const Test = () => {
  const [hh, sethh] = React.useState(20)

  React.useEffect(() => {
    const headerElem = document.querySelector("#header")
    headerElem && console.log("headerElem", headerElem)
    headerElem && sethh(headerElem.offsetHeight)
  }, [])

  return (
    <Layout>
      <div className="flex flex-row">
        <div
          className="fixed left-0 h-full bg-bronze"
          style={{
            top: `${hh}px`,
            width: "45%",
            //     backgroundColor: "#68e0cf",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div
            className="h-screen"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              mixBlendMode: "luminosity",
              //   backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div
          className="absolute right-24 border-r border-r-bronze bg-black"
          style={{ widht: "55%", top: `${hh}px` }}
        >
          <div className="overflow-y-auto px-5">
            <MainSection />
            <div className="h-40 bg-slate-400">COL 1</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL 2</div>
            <div className="h-40 bg-slate-400">COL sssssssssssss2</div>
          </div>
        </div>
        <div
          className="fixed right-0 flex h-full  w-24 flex-col-reverse  bg-black"
          //    style={{ top: `${hh}px` }}
        >
          <div className="absolute bottom-4 ">hhhhhhh</div>
        </div>
      </div>
    </Layout>
  )
}

export default Test
