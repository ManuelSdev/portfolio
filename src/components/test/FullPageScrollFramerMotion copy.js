import React, { createRef, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
const FullPageScrollFramerMotion = () => {
  const [data, setData] = useState(false)
  const scrollRef = useRef(0)
  const [y, setY] = useState(0)
  const [target, setTarget] = useState("")
  const refs = {
    a: useRef(),
    b: useRef(),
    c: useRef(),
    d: useRef(),
    z: useRef(),
  }
  const { a, b, c, d, z } = refs
  const refsMap = [a, b, c, d]
  const currentMap = refsMap.map(ref => ref.current)
  // isRunning = useRef(false)

  useEffect(() => {
    // setY(a.current.offsetHeight)
    //console.log()
    let options = {
      //root: b.current,
      rootMargin: "0px",
      threshold: 1.0,
    }
    const cb = index => (entry, observer) => {
      //  entry.map(el => console.log(el))
      console.log("Entra en " + index)
    }
    //Crea observador para cada ref
    refsMap.map((ref, index) => {
      let observer = new IntersectionObserver(cb(index), options)
      observer.observe(ref.current)
    })

    //  z.current.addEventListener("click", ev => console.log("first"))
    z.current.addEventListener("animationstart ", ev =>
      console.log("animation")
    )
    z.current.addEventListener("wheel", ev => {
      const [firstRef] = refsMap
      const [lastRef] = refsMap.slice(-1)
      console.log("??????", currentMap.indexOf(ev.target))
      console.log("@@@@@@@@@@@@@", firstRef.current)
      const fromTop = ev.target.offsetTop
      //Distancia al borde superior del pader
      console.log("@@@@@@@@@@@@@", lastRef.current.offsetTop)
      // console.log("**********", d.current.scrollTop)
      // console.log("desplazamiento", a.current.offsetHeight)
      //  console.log("event", ev.target === a.current)
      ev.preventDefault()
      if (ev.deltaY > 0 && ev.target != lastRef.current)
        setY(p => p - ev.target.offsetHeight)
      if (ev.deltaY < 0 && ev.target != firstRef.current)
        setY(p => p + ev.target.offsetHeight)
      ev.preventDefault()
    })

    //  setY(0)
  }, [])

  useEffect(() => {
    first
  }, [])

  // console.log(a.current.offsetHeight)
  // const cancelWheel=()=>
  const cc = 100
  const variants = {
    //   hidden: { y },
    hidden: { y },
  }
  const handleOnWheel = ev => {
    console.log(ev.deltaY)
    // ev.deltaY = 0.0
    if (ev.deltaY > 0) setY(p => p - a.current.offsetHeight + ev.deltaY)
    if (ev.deltaY < 0) setY(p => p + a.current.offsetHeight + ev.deltaY)
  }
  return (
    <motion.div
      ref={z}
      variants={variants}
      animate="hidden"
      className=" bg-gray-100	"
      //  onWheel={handleOnWheel}
      //  onScroll={() => console.log("-------------")}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div id="slider">
        <div
          id="a"
          ref={refs.a}
          //       onWheel={handleWheel(0)}
          className="table h-screen w-full table-fixed bg-red-200"
        >
          AAAAAAAAAAAAA
        </div>
        <div
          id="b"
          ref={refs.b}
          //       onWheel={handleWheel(1)}
          className="h-screen w-full bg-blue-200"
          //   whileInView="visible"
          viewport={{ once: true }}
          onScroll={() => console.log("-------------")}
        >
          BBBBBBBBBBBBBBB
        </div>
        <div
          id="c"
          ref={refs.c}
          //     onWheel={handleWheel(2)}
          className="h-screen w-full bg-green-200"
        >
          CCCCCCCCCCCCCC
        </div>
        <div
          id="d"
          ref={refs.d}
          //      onWheel={handleWheel(3)}
          className="table h-screen w-full table-fixed bg-yellow-200"
        >
          DDDDDDDDDDDDDDD
        </div>
      </div>
    </motion.div>
  )
}

export default FullPageScrollFramerMotion
