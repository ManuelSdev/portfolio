import React, { forwardRef } from "react"
import Test from "./Tes"

const Testdos = forwardRef(({ ...props }, ref) => {
  //const { testProp } = props
  return (
    <div>
      <Test {...props} ref={ref} />
    </div>
  )
})

export default Testdos
