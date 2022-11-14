import { sectionsMap } from "../../assets/js/tools"

import React from "react"

const SectionLinkButtons = ({ buttonClass, wrapperClass }) => {
  const handleClick = hash => ev => {
    const element = document.getElementById(hash)
    element.scrollIntoView()
  }

  return (
    <div className={wrapperClass}>
      {sectionsMap.map(section => {
        const [name, hash] = section
        return (
          <button
            key={hash}
            onClick={handleClick(hash)}
            className={buttonClass}
          >
            {name}
          </button>
        )
      })}
    </div>
  )
}

export default SectionLinkButtons
