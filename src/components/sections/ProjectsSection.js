import React, { useState } from "react"
import SectionContent from "./SectionContent"
import { StaticImage } from "gatsby-plugin-image"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSwiper } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "./styles.css"
import gifSevimatic from "../../assets/gifs/sevi.gif"
import gifConilBikes from "../../assets/gifs/conil.gif"
import { Link } from "gatsby"
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
  gif: gifConilBikes,
  alt: "Gif demostración de la web Conil Bikes",
}

const projectsProps = [seviProjectProps, conilProjectProps]

const ProjecTitle = () => {
  return <div></div>
}

const ProjectInfo = ({ title, description, link, gif, alt }) => {
  return (
    <div
      id="project-wrapper"
      className=" mb-10 flex flex-col items-center justify-center rounded-xl border-[2px] border-bronze_2 bg-black_2 p-5"
    >
      <div className="pb-6">
        <div className="">
          <div className=" py-2 text-lg font-bold ">
            {title}
            <span className="icon-link ml-2"></span>
          </div>
          <div className=" text-justify">{description}</div>
        </div>
      </div>

      <a to={link}>
        <img
          // onClick={a(link)}

          className="m-0 border-t-2 border-solid border-bronze  py-8 shadow-bronze"
          src={gif}
          alt={alt}

          // style={{ border: " 5px solid #555" }}
          //   className=" transition-opacity group-hover:opacity-30 group-hover:grayscale group-hover:duration-300"
        />
      </a>
      <button
        className="w-20 rounded bg-bronze p-2 font-semibold hover:bg-bronze_1"
        onClick={() => window.location.assign(link)}
      >
        VISITAR
      </button>
    </div>
  )
}

const ProjectsSection = ({ ...props }) => {
  //const {slideNext} = useSwiper()

  const paragraphs = [
    "Los proyectos mostrados a continuación se encuentran en fase de desarrollo",
  ]
  return (
    <SectionContent
      {...props}
      title={"Proyectos"}
      // subtitle={"que puedo hacer"}
      paragraphs={paragraphs}
    >
      <div className=" font-sans">
        <Swiper
          cssMode={true}
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {projectsProps.map((props, index) => (
            <SwiperSlide
              key={index}
              //  onClick={() => window.location.assign(props.link)}
            >
              <ProjectInfo {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContent>
  )
}

export default ProjectsSection
