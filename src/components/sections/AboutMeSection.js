import React from "react"
import SectionContent from "./SectionContent"

const AboutMeSection = () => {
  const paragraphs = [
    "Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
    "Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
  ]
  return (
    <SectionContent
      title={"Sobre mí"}
      subtitle={"Mi historia"}
      paragraphs={paragraphs}
    />
  )
}

export default AboutMeSection
