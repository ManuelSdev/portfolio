import React from "react"

const SectionContent = ({
  title,
  subtitle,
  text,
  children,
  paragraphs,
  id,
}) => {
  console.log("=============", children)

  return (
    <div id={id} className="bg-softBlack border-t border-t-bronze">
      <div
        className="max-w-4xl py-12  text-white 2xl:px-[8%] 2xl:py-20"
        //   style={{ paddingLeft: "8%", paddingRight: "8%" }}
      >
        <div className="2xl:pb-16">
          <div className="pb-12 font-serif text-6xl font-extrabold text-bronze 2xl:pb-2.5">
            {title}
          </div>
          <div className="text-lg font-semibold uppercase">{subtitle}</div>
        </div>
        <div className="pb-8 text-base">
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
