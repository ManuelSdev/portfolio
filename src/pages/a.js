import React from "react"
import { useState } from "react"

const A = () => {
  const [clase, setClase] = useState("")

  const a = () =>
    setClase(
      "transition-transform duration-700 ease-linear translate-x-[50px] opacity-20"
    )
  const b = () =>
    setClase("transition duration-100 ease-linear translate-x-0 bg-blue-500")
  return (
    <div className="h-full w-full overflow-hidden">
      <button onClick={a}>BONTONN</button>
      <button className="block" onClick={b}>
        BONTONN 2
      </button>
      <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] h-[2000px] bg-black">
        <div className=" h-full w-full bg-slate-300">
          <div className="fixed top-24 left-0 right-0">
            <div className="flex flex-row items-center justify-between  text-3xl  text-bronze">
              <div>unoooo</div>
              <div>dooooo</div>
            </div>
          </div>
          <div
            className={
              "absolute top-0 left-0 right-0 h-full translate-x-[50%] bg-red-300 opacity-20" +
              clase
            }
          ></div>
        </div>
      </div>
    </div>
  )
}

export default A

export function Head() {
  return (
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
    />
  )
}
