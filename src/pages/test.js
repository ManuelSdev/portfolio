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

  const percentage = (total, partial) => (partial * total) / 100
  return (
    <Layout>
      <div
        className="absolute left-0 right-0 h-full"
        style={{
          top: `${hh}px`,
        }}
      >
        <div
          // className="fixed left-0 flex h-screen bg-bronze"
          className="fixed left-0 h-full bg-bronze"
          style={{
            // width: "45%",
            //
            width: "calc(45% - 48px)",
            /*
              width: `${percentage(
                document.querySelector("#layout").offsetWidth,
                45
              )}px`,
*/
            /*() => {
                return calc(
                  `${document.querySelector("#test").offsetWidth}px -55%`
                )
              },
              */
            //top: `-${hh}px`,
            //backgroundColor: "#68e0cf",
            // flexBasis: "45%",
            //      minWidth: "740px",
            // flexGrow: 1,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div
            className=" h-screen  bg-bronze"
            style={{
              //  flexBasis: "45%",
              //   flexGrow: 1,
              //flexShrink: 0,
              //  width: "740px",
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
          //   className="absolute right-24 border-r border-r-bronze bg-black"
          className="absolute right-24 border-r border-r-bronze bg-black"
          style={{
            // flexBasis: "55%",
            //    flexShrink: 2,
            // flexGrow: 1,
            // ,
            top: `-${hh}px`,
            //    width: "55%",
            width: "calc(55% - 48px)",
          }}
        >
          <div
          //  className="overflow-y-auto px-5"
          >
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
          className="fixed right-0 flex h-screen  w-24 flex-col-reverse  bg-black"
          //    style={{ top: `${hh}px` }}
        ></div>
      </div>
    </Layout>
  )
}

export default Test
