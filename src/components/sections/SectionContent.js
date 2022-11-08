import React from "react"

const SectionContent = ({ title, subtitle, text, children, paragraphs }) => {
  console.log("=============", children)

  return (
    <div className="border-t border-t-bronze bg-black">
      <div
        className="max-w-4xl py-20 text-white"
        style={{ paddingLeft: "8%", paddingRight: "8%" }}
      >
        <div className="pb-16">
          <div className="pb-2.5 font-serif text-6xl font-extrabold text-bronze">
            {title}
          </div>
          <div className="text-lg font-semibold uppercase">{subtitle}</div>
        </div>
        <div className="text-base">
          {paragraphs &&
            paragraphs.map((elem, index) => (
              <div key={index} className="mb-7">
                {elem}
              </div>
            ))}
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SectionContent
