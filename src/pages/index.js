import React from "react"
import Layout from "../components/elements/Layout"

const IndexPage = () => {
  const [hh, sethh] = React.useState(20)

  React.useEffect(() => {
    const headerElem = document.querySelector("#header")
    headerElem && console.log("headerElem", headerElem)
    headerElem && sethh(headerElem.offsetHeight)
  }, [])

  const percentage = (total, partial) => (partial * total) / 100

  return <Layout />
}

export default IndexPage
//Resuelve problema fixed-translate que añade width que supone la traslación al elemento fixed
export function Head() {
  return (
    <>
      <title>Manuel Sánchez Manzanares portfolio</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </>
  )
}
