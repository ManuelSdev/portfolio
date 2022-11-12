import React, { useState } from "react"
import SectionContent from "./SectionContent"
import { StaticImage } from "gatsby-plugin-image"

import gifSevimatic from "../../assets/gifs/sevi.gif"
//import LinkIcon from "../../assets/svg/link.svg"

const seviProjectProps = {
  title: "e-commerce web app",
  description: `Website de comercio electrónico. SSR para potenciar el rendimiento SEO. Con CMS que permite la edición de productos y categorías por parte del administrador.`,
  link: "https://websevi.vercel.app/",
  gif: gifSevimatic,
  alt: "Gif demostración de la web Sevimatic.com",
}

const conilProjectProps = {
  title: "bike rental web app",
  description: `Aplicación web para gestionar una empresa de alquiler de bicicletas. SSR para potenciar el rendimiento SEO. `,
  link: "https://conil-bikes.vercel.app/",
  gif: gifSevimatic,
  alt: "Gif demostración de la web Conil Bikes",
}

const projectsProps = [seviProjectProps, conilProjectProps]

const ProjecTitle = () => {
  return <div></div>
}

const a = link => ev => {
  //  window.location = "/test"

  window.history.replaceState(
    "",
    document.title,
    window.location.pathname + window.location.search
  )
  window.location = link
}

const ProjectInfo_Old = ({ title, description, link, gif, alt }) => {
  return (
    <div className="group relative mb-8 overflow-hidden border-2 border-bronze 2xl:bg-bronze">
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

const ProjectInfo = ({ title, description, link, gif, alt }) => {
  return (
    <div
      id="project-wrapper"
      className=" mb-5 flex flex-col justify-center border-[1px] border-bronze_2 bg-black p-5 2xl:bg-bronze"
    >
      <img
        // onClick={a(link)}
        onClick={a(link)}
        className="m-0 border-b-2 border-solid border-bronze  pb-6 shadow-bronze"
        src={gif}
        alt={alt}

        // style={{ border: " 5px solid #555" }}
        //   className=" transition-opacity group-hover:opacity-30 group-hover:grayscale group-hover:duration-300"
      />

      <div className="pt-5">
        <div className="">
          <div className=" pb-2 text-lg font-bold ">
            {title}
            <span className="icon-link ml-2"></span>
          </div>
          <div className=" text-justify">{description}</div>
        </div>
      </div>
    </div>
  )
}
const ProjectsSection = ({ id }) => {
  const paragraphs = [
    "En la actualidad, estoy trabajando en el desarrollo de dos aplicaciones para las empresas Sevimatic y Conil Bikes",
  ]
  return (
    <SectionContent
      id={id}
      title={"Proyectos"}
      // subtitle={"que puedo hacer"}
      paragraphs={paragraphs}
    >
      <div
        className="font-sans 
      
        2xl:grid 2xl:grid-cols-2 2xl:gap-4"
      >
        {projectsProps.map(props => (
          <ProjectInfo {...props} />
        ))}
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
