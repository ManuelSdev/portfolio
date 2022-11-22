import GitHubIcon from "../../assets/svg/github.svg"
import LinkedinIcon from "../../assets/svg/linkedin.svg"
import WhatsappIcon from "../../assets/svg/whatsapp.svg"
import Mail from "../../assets/svg/mail.svg"
import React from "react"

const Logo = ({ Icon, link }) => {
  return (
    <a href={link}>
      <Icon width="52px" height="52px" className="fill-bronze " />
    </a>
  )
}
const Sidebar = () => {
  return (
    <div
      id="sidebar-wrapper"
      className="bg-black  py-8 lg:fixed lg:right-0 lg:top-0 lg:flex lg:h-screen lg:w-24 lg:items-end lg:justify-center lg:py-0 2xl:flex"
    >
      <div
        className="flex justify-evenly lg:mb-8 lg:flex-col lg:justify-evenly"
        style={{ height: "30%" }}
      >
        <Logo
          Icon={LinkedinIcon}
          link={
            "https://www.linkedin.com/in/manuel-s%C3%A1nchez-manzanares-8509b323a/"
          }
        />

        <Logo Icon={GitHubIcon} link={"https://github.com/ManuelSdev"} />
        <Logo Icon={WhatsappIcon} link={"https://wa.me/34626852960"} />
        <Logo Icon={Mail} link={"mailto:masanchezzm@gmail.com"} />
      </div>
    </div>
  )
}

export default Sidebar
