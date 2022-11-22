import React, { useEffect, useState } from "react"

import { sectionsMap } from "../../assets/js/tools"
import DrawerButton from "./DrawerButton"
import { motion, useAnimation, useScroll } from "framer-motion"

const Header = ({ buttonColor }) => {
  const handleClick = hash => ev => {
    const element = document.getElementById(hash)
    element.scrollIntoView()
  }
  const [isOnTop, setisOnTop] = useState("opacity-0")
  const { scrollY } = useScroll()
  useEffect(() => {
    return scrollY.onChange(latest => {
      if (latest === 0) setisOnTop("opacity-0 ease-in duration-300")
      if (latest > 20) setisOnTop("opacity-100 ease-in duration-500")
    })
  }, [])
  //console.log("@@@@@@@@@@", latest)
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  return (
    <motion.div
      className={
        "fixed top-0 left-0 right-0 z-10 flex h-20  bg-black_2 px-4 py-5 font-bold shadow-md transition-opacity lg:border-b-bronze lg:bg-black lg:px-5 lg:py-7 lg:opacity-100 lg:shadow-bronze " +
        isOnTop
      }
      //variants={variants}
      //  initial="hidden"
      //  animate={isOnTop ? "hidden" : "visible"}
      //   initial={{ opacity: 1 }}
      //  whileInView={{ opacity: 0 }}
      // exit={latest<200 &&}
      //  transition={{ duration: 1 }}
      //    transition={{ duration: 3 }}
      id="header"

      // className=" fixed top-0 left-0 right-0  z-10 border-b-bronze  bg-black shadow-md shadow-bronze"
    >
      <div
        id="kkskks"
        className="flex grow flex-row justify-between text-xl text-bronze"
      >
        <div className="font-bold">Manuel Sánchez Manzanares</div>
        <div className=" flex flex-row justify-around  lg:items-center">
          <div
            id="top-menu"
            className=" hidden flex-row  justify-around lg:flex"
          >
            {sectionsMap.map((section, index) => {
              const [name, hash] = section

              return (
                <button
                  className={"ml-3  hover:text-white " + buttonColor[hash]}
                  onClick={handleClick(hash)}
                  key={index}
                >
                  {name}
                </button>
              )
            })}
            <a
              className={
                "ml-5 rounded-full border-[1px] border-bronze p-2 font-bold text-bronze no-underline hover:bg-white hover:text-black"
              }
              href="https://drive.google.com/uc?export=download&id=1kVuLuDyyNujt7AIrsku8dCNN0x_wZJU8"
            >
              Descargar CV
            </a>
          </div>

          <DrawerButton />
        </div>
      </div>
    </motion.div>
  )
}

export default Header
