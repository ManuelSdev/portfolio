import React, { forwardRef } from "react"
import SectionContent from "./SectionContent"

import ReactIcon from "../../assets/svg/ireact.svg"
import MongoIcon from "../../assets/svg/mongodb.svg"
import GitIcon from "../../assets/svg/git.svg"
import NextIcon from "../../assets/svg/nextjs.svg"
import JsIcon from "../../assets/svg/javascriptIcon.svg"
import ExpressIcon from "../../assets/svg/express.svg"
import HtmlIcon from "../../assets/svg/html.svg"
import CssIcon from "../../assets/svg/css.svg"
import GatsbyIcon from "../../assets/svg/gatsby.svg"
import DevopsIcon from "../../assets/svg/devops.svg"
import AgileIcon from "../../assets/svg/agile.svg"
import TailwindIcon from "../../assets/svg/tailwind.svg"
import NodeIcon from "../../assets/svg/node.svg"
import ReduxIcon from "../../assets/svg/redux.svg"
import MuiIcon from "../../assets/svg/mui.svg"

const HardSkillsSection = forwardRef(({ addClasses, ...props }, ref) => {
  const skills = [
    [JsIcon, "JavaScript"],
    [HtmlIcon, "HTML5"],
    [CssIcon, "CSS3"],
    [MuiIcon, "Material UI"],
    [TailwindIcon, "Tailwind CSS"],
    [ReactIcon, "React"],
    [ReduxIcon, "Redux"],
    [NextIcon, "Next js"],
    [GatsbyIcon, "Gatsby"],
    [NodeIcon, "Node js"],
    [ExpressIcon, "Express js"],
    [MongoIcon, "MongoDB"],
    [GitIcon, "Git"],
    [DevopsIcon, "Devops"],
    [AgileIcon, "Agile"],
  ]
  return (
    <SectionContent
      {...props}
      ref={ref}
      title={"Hard Skills"}
      addClasses={addClasses}
      // subtitle={"que puedo hacer"}
    >
      <div className="grid grid-cols-3 gap-3 2xl:grid-cols-5 ">
        {skills.map(skill => {
          const [Icon, name] = skill
          return (
            <div key={name} className="pb-1  ">
              <div className="flex flex-col items-center	">
                <Icon
                  width="82px"
                  height="82px"
                  className=" rounded-lg border border-bronze bg-bronze p-0.5"
                />
                <div className="pt-1 text-center">{name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionContent>
  )
})

export default HardSkillsSection
