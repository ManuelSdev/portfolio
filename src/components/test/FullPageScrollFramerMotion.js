import React, { createRef, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
const FullPageScrollFramerMotion = () => {
  const [data, setData] = useState(false)
  const scrollRef = useRef(0)
  const [y, setY] = useState(0)
  const [target, setTarget] = useState("")
  const [current, setCurrent] = useState("")
  const [scroll, setScroll] = useState(0)
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
  const animationIsRunning = useRef(false)
  const observerIsRunning = useRef(false)
  // console.log("************", animationIsRunning.current)
  //  console.log("******************", animationIsRunning.current)
  useEffect(() => {
    // setY(a.current.offsetHeight)
    //console.log()
    let options = {
      //root: b.current,
      rootMargin: "0px",
      threshold: 1.0,
    }
    const cb = (entries, observer) => {
      // const isActive = entry.isIntersecting
      // console.log("===", isActive)
      entries.map(entry => {
        entry.isIntersecting && setCurrent(entry.target)
        // console.log("++++++", entry.target)
        // console.log("------", entry.isIntersecting)
        /**
         * El primer observer ejecuta todas las callbacks, dando entry.isIntersecting===true para el elemento que sale
         * en pantalla al cargar la página
         */
        if (entry.isIntersecting && !observerIsRunning.current)
          observerIsRunning.current = true
        if (entry.isIntersecting && observerIsRunning.current) {
          console.log(
            "intersection++++++ pone animationIsRunning a ------------FALSE"
          )
          animationIsRunning.current = false
        }
      })
      //    console.log("Entra en " + index)
    }
    //Crea observador para cada ref
    refsMap.map((ref, index) => {
      const observer = new IntersectionObserver(cb, options)
      observer.observe(ref.current)
      return observer
    })
    // console.log("pppppppppppppppp", aju)
    //  z.current.addEventListener("click", ev => console.log("first"))
    const handleWheel = ev => {
      const [lastRef] = refsMap.slice(-1)
      console.log("++++++", ev)
      ev.preventDefault()
      // console.log("animationIsRunning.current", animationIsRunning.current)
      if (animationIsRunning.current) return
      // console.log("handleWheel")
      if (ev.deltaY > 0 && ev.target.offsetTop < lastRef.current.offsetTop) {
        setY(p => p - ev.target.offsetHeight)
        console.log("handleWheel**** pone animationIsRunning a ++++++++++TRUE")
        animationIsRunning.current = true
        return
      }

      if (ev.deltaY < 0 && ev.target.offsetTop > 0) {
        setY(p => p + ev.target.offsetHeight)
        console.log("handleWheel**** pone animationIsRunning a ++++++++++TRUE")
        animationIsRunning.current = true
        return
      }
    }
    z.current.addEventListener("wheel", handleWheel, true)
    return () => z.current.removeEventListener("wheel", handleWheel)
    //  setY(0)
    // if (isFirstRender.current) isFirstRender.current = false
  }, [])

  // console.log(a.current.offsetHeight)
  // const cancelWheel=()=>
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

  useEffect(() => {
    window.scrollTo(0, scroll)
  }, [scroll])

  return (
    <div>
      <motion.div
        ref={z}
        variants={variants}
        animate="hidden"
        className=" 	bg-gray-100"
        //  onWheel={handleOnWheel}
        //  onScroll={() => console.log("-------------")}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div id="slider" className=" ">
          <div
            id="a"
            ref={refs.a}
            onClick={ev => console.log("-----------------", ev)}
            //       onWheel={handleWheel(0)}
            className="  h-screen   w-full  bg-red-200"
          >
            <div
              id="prueba"
              onClick={ev => console.log("+++++++++++++++", ev.currentTarget)}
              className="h-[700px] w-[500px] bg-slate-400"
            >
              holaa
              <div
                onClick={ev => console.log("@@@@@@@@@@@@@", ev.target)}
                className="top-10 h-80 w-80 bg-orange-500"
              >
                adiossss
              </div>
            </div>
          </div>
          <div
            id="b"
            ref={refs.b}
            //       onWheel={handleWheel(1)}
            className=" h-screen w-full  bg-blue-200"
            //   whileInView="visible"
            viewport={{ once: true }}
            onScroll={() => console.log("-------------")}
          >
            BBBBBBBBBBBBBBB
          </div>
          <div
            //    onViewportEnter={() => console.log("******************************")}
            id="c"
            ref={refs.c}
            //     onWheel={handleWheel(2)}
            className=" h-screen w-full  bg-green-200"
          >
            CCCCCCCCCCCCCC
          </div>
          <div
            id="d"
            ref={refs.d}
            //      onWheel={handleWheel(3)}
            className=" h-screen w-full  bg-yellow-200"
          >
            DDDDDDDDDDDDDDD
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FullPageScrollFramerMotion
