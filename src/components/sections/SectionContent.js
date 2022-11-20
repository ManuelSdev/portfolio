import React, { forwardRef } from "react"

import { motion, useAnimation, useScroll } from "framer-motion"

const SectionContent = forwardRef(
  (
    {
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
      handleWheel,
      // ref,
      refProp,
    },
    ref
  ) => {
    return (
      <motion.div
        // id={id}
        ref={ref}
        onViewportEnter={handleOnViewportEnter}
        onViewportLeave={handleOnViewportLeave}
        viewport={viewport}
        className={
          "relative block h-[calc(100vh_-_5rem)] border-b-[1px]  border-b-bronze bg-black_3 " +
          addClasses
        }
      >
        <div id={anchorName} className="absolute -top-20 left-0"></div>
        <div
          id={id}
          onWheel={handleWheel}
          className="py-12 text-white  lg:max-w-4xl lg:px-[8%] lg:py-20"
          //   style={{ paddingLeft: "8%", paddingRight: "8%" }}
        >
          <div className="">
            <div className="pb-14 text-center font-serif text-6xl font-extrabold text-bronze xl:text-left ">
              {title}
            </div>
            <div className="text-lg font-semibold uppercase">{subtitle}</div>
          </div>
          {paragraphs && (
            <div className="pb-8 text-base">
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
)

export default SectionContent
