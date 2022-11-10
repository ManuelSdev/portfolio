import GitHubIcon from "../assets/svg/github.svg"
import LinkedinIcon from "../assets/svg/linkedin.svg"
import WhatsappIcon from "../assets/svg/whatsapp.svg"
import Mail from "../assets/svg/mail.svg"
import React from "react"

const Logo = ({ Icon }) => {
  return <Icon width="52px" height="52px" className="fill-bronze " />
}
const Sidebar = () => {
  return (
    <div
      id="sidebar-wrapper"
      className="fixed right-0 hidden h-screen w-24 items-end justify-center bg-black 2xl:flex"
    >
      <div
        className="mb-8 flex flex-col justify-evenly"
        style={{ height: "30%" }}
      >
        <Logo Icon={LinkedinIcon} />

        <Logo Icon={GitHubIcon} />
        <Logo Icon={WhatsappIcon} />
        <Logo Icon={Mail} />
      </div>
    </div>
  )
}

export default Sidebar
