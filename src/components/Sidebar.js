import GitHubIcon from "../assets/svg/github.svg"
import LinkedinIcon from "../assets/svg/linkedin.svg"
import WhatsappIcon from "../assets/svg/whatsapp.svg"
import Mail from "../assets/svg/mail.svg"
import React from "react"
import { Link } from "gatsby"

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
      className="fixed right-0 top-0 hidden h-screen w-24 items-end justify-center bg-black lg:flex 2xl:flex"
    >
      <div
        className="mb-8 flex flex-col justify-evenly"
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
