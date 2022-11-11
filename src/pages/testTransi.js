import React from "react"
import { useState } from "react"

const Transi = () => {
  const [clase, setClase] = useState("")

  const a = () =>
    setClase("transition-transform duration-700 ease-linear -translate-x-[50%]")
  const b = () =>
    setClase("transition duration-100 ease-linear translate-x-0 bg-blue-500")
  return (
    <div>
      <button onClick={a}>BONTONN</button>
      <button className="block" onClick={b}>
        BONTONN 2
      </button>
      <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] bg-black">
        <div className="relative h-full w-full bg-slate-300">
          <div
            className={
              "absolute top-0 left-[100%] -right-[100%] h-full bg-red-300  " +
              clase
            }
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Transi
