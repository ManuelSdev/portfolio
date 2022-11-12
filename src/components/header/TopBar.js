import React from "react"
import { Link } from "gatsby"

const TopBar = ({ onOpen }) => {
  return (
    <div className="flex flex-row items-center justify-between  text-3xl  ">
      <Link
        to="/test"
        id="name-wrapper"
        className="font-serif text-bronze no-underline"
      >
        <strong>Manuel Sánchez</strong>
      </Link>
      <i className="icofont-navigation-menu text-bronze" onClick={onOpen}></i>
    </div>
  )
}

export default TopBar
