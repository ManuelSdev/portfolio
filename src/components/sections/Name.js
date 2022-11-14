import React from "react"

const Name = () => {
  return (
    <div
      className="  -ml-20 mt-24  rounded-l-full bg-black py-11 pl-11 font-serif text-3xl text-bronze
      min-[500px]:text-4xl
      min-[700px]:text-5xl
      
      lg:-ml-24  lg:p-20  lg:text-8xl xl:-ml-40 2xl:-ml-48
     "
    >
      <div className="hidden sm:block">
        <div>Manuel</div>
        <div>Sánchez</div>
      </div>
      <div className="sm:hidden">MS</div>
    </div>
  )
}

export default Name
