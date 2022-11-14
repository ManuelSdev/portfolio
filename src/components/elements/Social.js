import GitHubIcon from "../../assets/svg/github.svg"
import LinkedinIcon from "../../assets/svg/linkedin.svg"
import WhatsappIcon from "../../assets/svg/whatsapp.svg"
import Mail from "../../assets/svg/mail.svg"
import React from "react"

const Logo = ({ Icon }) => {
  return (
    <Icon width="52px" height="52px" className="bg-transparent fill-bronze" />
  )
}
const Sidebar = () => {
  return (
    <div id="social-wrapper" className="bg-transparent">
      <div
        className="flex justify-evenly py-12 lg:hidden"
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
