import { useBreakpoint } from "gatsby-plugin-breakpoints"
import React from "react"

const Name = () => {
  const { sm } = useBreakpoint()
  return (
    <div
      className=" mt-24 -ml-[18vw] rounded-l-full bg-black py-11 pl-11 font-serif text-3xl text-bronze
       min-[450px]:-ml-[14vw] min-[450px]:mt-[25vw]
       min-[550px]:-ml-[12vw]  min-[550px]:text-4xl
        sm:-ml-28 sm:text-5xl lg:-ml-36 lg:p-20 xl:-ml-48 xl:text-8xl"
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
