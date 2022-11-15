import React from "react"

const SectionContent = ({
  title,
  subtitle,
  text,
  children,
  paragraphs,
  id,
  addClasses,
  anchorName,
}) => {
  console.log("=============", children)

  return (
    <div
      // id={id}
      className={
        "relative block border-b-[1px]  border-b-bronze bg-black_1 " +
        addClasses
      }
    >
      <div id={anchorName} className="absolute -top-20 left-0"></div>
      <div
        className="py-12 text-white  lg:max-w-4xl lg:px-[8%] lg:py-20"
        //   style={{ paddingLeft: "8%", paddingRight: "8%" }}
      >
        <div className="">
          <div className="pb-14 text-center font-serif text-6xl font-extrabold text-bronze xl:text-left ">
            {title}
          </div>
          <div className="text-lg font-semibold uppercase">{subtitle}</div>
        </div>
        {paragraphs && (
          <div className="pb-8 text-base">
            {paragraphs.map((elem, index) => (
              <div key={index} className="mb-7">
                {elem}
              </div>
            ))}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SectionContent
