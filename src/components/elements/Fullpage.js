import React, { createRef, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const FullPage = ({ sectionRefs, children, headerRef }) => {
  const [y, setY] = useState(0)

  console.log(sectionRefs)
  const wrapperRef = useRef()

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
    sectionRefs.map(ref => {
      const observer = new IntersectionObserver(cb, options)
      observer.observe(ref.current)
      return observer
    })

    // console.log("pppppppppppppppp", aju)
    //  z.current.addEventListener("click", ev => console.log("first"))
    const handleWheel = ev => {
      const [lastRef] = sectionRefs.slice(-1)
      console.log("++++++", ev.currentTarget)

      ev.stopPropagation()
      ev.preventDefault()
      // console.log("animationIsRunning.current", animationIsRunning.current)
      if (animationIsRunning.current) return
      // console.log("handleWheel")
      if (
        ev.deltaY > 0 &&
        ev.currentTarget.offsetTop < lastRef.current.offsetTop
      ) {
        setY(p => p - ev.currentTarget.offsetHeight)
        console.log("handleWheel**** pone animationIsRunning a ++++++++++TRUE")
        animationIsRunning.current = true
        return
      }

      if (ev.deltaY < 0 && ev.currentTarget.offsetTop > 0) {
        setY(
          p =>
            p + headerRef.current.offsetHeight + ev.currentTarget.offsetHeight
        )
        console.log("handleWheel**** pone animationIsRunning a ++++++++++TRUE")
        animationIsRunning.current = true
        return
      }
    }

    wrapperRef.current.addEventListener("wheel", handleWheel, true)

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
      className="bg-gray-100"
      onclick={ev => console.log("first", ev)} //  onWheel={handleOnWheel}
      //  onScroll={() => console.log("-------------")}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div id="slider" className=" ">
        {React.Children.map(children, (section, index) => (
          <div
            ref={sectionRefs[index]}
            //       onWheel={handleWheel(0)}
            className="  h-full   w-full  bg-red-200"
          >
            {section}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default FullPage
