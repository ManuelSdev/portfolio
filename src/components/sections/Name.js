import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"

const Name = () => {
  const { sm, xs } = useBreakpoint()
  return (
    <div
      className="  -ml-20 mt-24  rounded-l-full bg-black py-11 pl-11 font-serif text-3xl text-bronze
      min-[500px]:text-4xl
      min-[700px]:text-5xl
      lg:-ml-40  lg:p-20  lg:text-8xl xl:-ml-48 
     "
    >
      {sm ? (
        <div>
          <div>Manuel</div>
          <div>Sánchez</div>
        </div>
      ) : (
        <div>MS</div>
      )}
    </div>
  )
}

export default Name

//-ml-[18vw]

/**
 

  min-[450px]:-ml-[14vw] min-[450px]:mt-[25vw]
       min-[550px]:-ml-[12vw]  min-[550px]:text-4xl
        sm:-ml-28 sm:text-5xl lg:-ml-36 lg:p-20 xl:-ml-48 xl:text-8xl


 */
