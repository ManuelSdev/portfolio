import React from "react"
import SectionContent from "./SectionContent"
//import CompassIcon from "../../assets/svg/ruler-compass-alt.svg"
import CompassIcon from "../../assets/svg/ruler-compass-alt.svg"
import WorkerIcon from "../../assets/svg/labour.svg"
import TeamIcon from "../../assets/svg/workers-group.svg"

import IdeaIcon from "../../assets/svg/unique-idea.svg"
import ChartIcon from "../../assets/svg/chart-histogram-alt.svg"
import BookIcon from "../../assets/svg/book.svg"

import BrainIcon from "../../assets/svg/brainstorming.svg"

import SpeedIcon from "../../assets/svg/speed-meter.svg"

import DiplomaIcon from "../../assets/svg/certificate-alt-2.svg"
import VolumeIcon from "../../assets/svg/volume-up.svg"
import MiningIcon from "../../assets/svg/mining.svg"

//Icon classes and descriptions map
const skills = [
  [WorkerIcon, "Trabajador y disciplinado"],
  [CompassIcon, "Minucioso"],
  [IdeaIcon, "Resolutivo"],
  [TeamIcon, "Cooperativo"],
  [BrainIcon, "Analítico"],
  [DiplomaIcon, "Formación continua"],
  [SpeedIcon, "Rápido aprendizaje"],
  [MiningIcon, "Persistente"],
  [VolumeIcon, "Comunicativo"],
]

const SoftSkillsSections = ({ ...props }) => {
  return (
    <SectionContent {...props} title={"Soft Skills"}>
      <div className="grid grid-cols-3 gap-3">
        {skills.map(skill => {
          const [Icon, name] = skill
          return (
            <div key={name} className="pb-1 ">
              <div className="flex flex-col items-center	">
                <Icon
                  width="82px"
                  height="82px"
                  viewBox="0 0 1000 1000"
                  className=" rounded-lg border border-bronze bg-bronze p-0.5 "
                  //className="fill-red-400"
                />
                <div className="max-w-[90%] pt-1 text-center">{name}</div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionContent>
  )
}

export default SoftSkillsSections
