import React, { createRef, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const FullPage = ({ sectionRefs, children }) => {
  const [y, setY] = useState(0)

  const wrapperRef = useEffect()

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
    sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(cb, options)
      observer.observe(ref.current)
      return observer
    })
    // console.log("pppppppppppppppp", aju)
    //  z.current.addEventListener("click", ev => console.log("first"))
    const handleWheel = ev => {
      const [lastRef] = refsMap.slice(-1)

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
    wrapperRef.current.addEventListener("wheel", handleWheel)
    return () => wrapperRef.current.removeEventListener("wheel", handleWheel)
    //  setY(0)
    // if (isFirstRender.current) isFirstRender.current = false
  }, [])

  // console.log(a.current.offsetHeight)
  // const cancelWheel=()=>
  const variants = {
    //   hidden: { y },
    hidden: { y },
  }

  return (
    <motion.div
      ref={wrapperRef}
      variants={variants}
      animate="hidden"
      className=" 	bg-gray-100"
      //  onWheel={handleOnWheel}
      //  onScroll={() => console.log("-------------")}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div id="slider" className=" ">
        {React.Children.map(children, (section, index) => (
          <div
            ref={refs.a}
            //       onWheel={handleWheel(0)}
            className="  h-screen   w-full  bg-red-200"
          >
            AAAAAAAAAAAAA
          </div>
        ))}
        <div
          id="a"
          ref={refs.a}
          //       onWheel={handleWheel(0)}
          className="  h-screen   w-full  bg-red-200"
        >
          AAAAAAAAAAAAA
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
  )
}

export default FullPage
