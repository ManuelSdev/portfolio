import React, { forwardRef } from "react"

const Test = forwardRef((props, ref) => {
  const { testProp } = props
  console.log("==========", testProp)
  return (
    <div id="oleee" ref={ref}>
      HOLAAAAAAAAAAAAAAAAAAA
    </div>
  )
})

export default Test
