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
      <div className="absolute left-0 right-0 " style={{ top: `${hh}px` }}>
        <div className="absolute right-24  flex w-full flex-row ">
          <div
            className="fixed left-0 flex h-screen bg-bronze"
            //  className=" h-full bg-bronze"
            style={{
              // width: "30",
              //     backgroundColor: "#68e0cf",
              flexGrow: 1,
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
            //   className="absolute right-24 border-r border-r-bronze bg-black"
            className="flex border-r border-r-bronze bg-black"
            style={{
              flexGrow: 2,
              widht: "45%",
              top: `${hh}px`,
            }}
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
        </div>

        <div
          className="fixed right-0 flex h-full  w-24 flex-col-reverse  bg-black"
          //    style={{ top: `${hh}px` }}
        >
          <div className="absolute bottom-4 h-2 text-cyan-300">hhhhhhh</div>
        </div>
      </div>
    </Layout>
  )
}

export default Test
