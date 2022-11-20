import React, { createRef, useRef } from "react"

const OnWheelScroll = () => {
  const scrollRef = useRef(0)
  const refs = {
    a: useRef(),
    b: useRef(),
    c: useRef(),
    d: useRef(),
  }
  const { a, b, c, d } = refs
  const handleWheel = refIndex => ev => {
    const refsMap = [a, b, c, d]
    //positivo  cuando ruedas abajo, negativo arriba
    //ev.preventDefault()
    //ev.deltaY = 500
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

    // return refs.projectRef.current.scrollIntoView()
    // window.scrollTo(0, a)
    //window.scrollBy(0, refs.hardRef.current.offsetHeight)
    // ref.current.scrollIntoView({ block: "start", behavior: "smooth" })
  }
  return (
    <div className="h-screen overflow-y-hidden bg-gray-100	">
      <div id="fullpage-wrapper">
        <div
          ref={refs.a}
          onWheel={handleWheel(0)}
          className="h-screen w-full bg-red-200"
        >
          AAAAAAAAAAAAA
        </div>
        <div
          ref={refs.b}
          onWheel={handleWheel(1)}
          className="h-screen w-full bg-blue-200"
        >
          BBBBBBBBBBBBBBB
        </div>
        <div
          ref={refs.c}
          onWheel={handleWheel(2)}
          className="h-screen w-full bg-green-200"
        >
          CCCCCCCCCCCCCC
        </div>
        <div
          ref={refs.d}
          onWheel={handleWheel(3)}
          className="h-screen w-full bg-yellow-200"
        >
          DDDDDDDDDDDDDDD
        </div>
      </div>
    </div>
  )
}

export default OnWheelScroll
