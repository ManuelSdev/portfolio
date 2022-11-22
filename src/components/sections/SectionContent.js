import React from "react"

import { motion, useAnimation, useScroll } from "framer-motion"

const SectionContent = ({
  title,
  subtitle,
  text,
  children,
  paragraphs,
  id,
  addClasses,
  anchorName,
  handleOnViewportEnter,
  handleOnViewportLeave,
  viewport,
}) => {
  //console.log(handleOnViewportEnter)
  return (
    <motion.div
      // id={id}
      onViewportEnter={handleOnViewportEnter}
      onViewportLeave={handleOnViewportLeave}
      viewport={viewport}
      className={
        "relative block border-b-[1px]  border-b-bronze bg-black " + addClasses
      }
    >
      <div id={anchorName} className="absolute -top-20 left-0"></div>
      <div
        className="py-12 text-white  lg:max-w-4xl lg:px-[8%] lg:py-20"
        //   style={{ paddingLeft: "8%", paddingRight: "8%" }}
      >
        <div className="">
          <div className="pb-14 text-center font-serif text-6xl font-bold text-bronze xl:text-left ">
            {title}
          </div>
          <div className="text-center text-lg font-semibold uppercase">
            {subtitle}
          </div>
        </div>
        {paragraphs && (
          <div className="justify-center px-2 pb-8 text-justify text-base lg:px-0">
            {paragraphs.map((elem, index) => (
              <div key={index} className="mb-7">
                {elem}
              </div>
            ))}
          </div>
        )}
        <div>{children}</div>
      </div>
    </motion.div>
  )
}

export default SectionContent
