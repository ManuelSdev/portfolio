import React from "react"
import Layout from "../components/Layout"

import background from "../images/me.jpg"
//const headerElem = document.querySelector("#header")
//const hh = headerElem.offsetHeight
const Test = () => {
  //console.log("##############", h.offsetHeight)
  return (
    <Layout>
      <div className="flex flex-row">
        <div className=" fixed top-20 left-0 h-full " style={{ width: "45%" }}>
          <div
            className="h-screen"
            style={{
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              //   backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
        <div className="absolute top-20 right-0" style={{ width: "55%" }}>
          <div className=" overflow-y-auto">
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
    </Layout>
  )
}

export default Test
