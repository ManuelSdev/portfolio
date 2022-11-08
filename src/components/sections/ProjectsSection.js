import React, { useState } from "react"
import SectionContent from "./SectionContent"
import { StaticImage } from "gatsby-plugin-image"

import gifSevimatic from "../../assets/gifs/sevi.gif"
//import LinkIcon from "../../assets/svg/link.svg"

const seviProject = {
  title: "e-commerce web app",
  description: `Website de comercio electrónico. SSR para potenciar el rendimiento SEO. Con CMS que permite la edición de productos y categorías por parte del administrador.`,
  link: "",
  gif: gifSevimatic,
  alt: "Gif demostración de la web Sevimatic.com",
}

const conilProject = {
  title: "bike rental web app",
  description: `Aplicación web para gestionar una empresa de alquiler de bicicletas. SSR para potenciar el rendimiento SEO. `,
  link: "",
  gif: gifSevimatic,
  alt: "Gif demostración de la web Conil Bikes",
}

const projects = [seviProject, conilProject]

const ProjectInfo = ({ title, description, link, gif, alt }) => {
  return (
    <div className="group relative overflow-hidden bg-bronze">
      <img
        src={gif}
        alt={alt}
        //   className=" transition-opacity group-hover:opacity-30 group-hover:grayscale group-hover:duration-300"
      />
      <div className="absolute -top-52 bg-bronze/70 transition-transform ease-linear group-hover:translate-y-24  group-hover:delay-500 group-hover:duration-700">
        <div className="p-2">
          <div className="text-center text-lg font-bold text-black ">
            {title}
            <span className="icon-link ml-2"></span>
          </div>
          <div className=" text-justify">{description}</div>
        </div>
      </div>
      <div className="absolute -bottom-10 transition-transform ease-linear group-hover:-translate-y-24 group-hover:delay-300 group-hover:duration-300">
        ABAJOOOO
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <SectionContent title={"Proyectos"} subtitle={"que puedo hacer"}>
      <div className="grid grid-cols-2 gap-4 font-sans">
        {projects.map(project => {
          const { title, description, link, gif, alt } = project
          return ProjectInfo({ title, description, link, gif, alt })
        })}
      </div>
    </SectionContent>
  )
}

export default ProjectsSection

//
/**
 {on && (
  <div className="absolute top-0 left-0 h-full w-full bg-bronze opacity-30 hover:hidden"></div>
)}
 */
