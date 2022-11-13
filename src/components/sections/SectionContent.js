import React from "react"

const SectionContent = ({
  title,
  subtitle,
  text,
  children,
  paragraphs,
  id,
  addClasses,
}) => {
  console.log("=============", children)

  return (
    <div
      id={id}
      className={
        "anchor-fix bg-softBlack block border-b-[1px]  border-b-bronze" +
        addClasses
      }
    >
      <div
        className="max-w-4xl py-12  text-white lg:px-[8%] lg:py-20"
        //   style={{ paddingLeft: "8%", paddingRight: "8%" }}
      >
        <div className="">
          <div className="pb-10 text-center font-serif text-6xl font-extrabold text-bronze xl:text-left ">
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
