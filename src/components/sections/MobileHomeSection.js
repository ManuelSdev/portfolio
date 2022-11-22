import React from "react"
import PagePhoto from "../elements/PagePhoto"
import Typing from "../elements/Typing"
import MainSection from "./MainSection"
import Name from "./Name"
import NameMobile from "./NameMobile"
import { motion } from "framer-motion"
const MobileHomeSection = () => {
  return (
    <motion.div
      id="mobile-home"
      className="flex h-screen  items-center border-b border-b-bronze bg-black pt-20 lg:hidden"
      onViewportLeave={() => console.log("ssssssssssssssssssssssssss")}
    >
      <div className="w-full grow bg-black_2 px-6  pt-11 pb-5 font-serif font-semibold ">
        <div className="pb-10 text-5xl text-bronze ">
          <div>Manuel</div>
          <div>Sánchez</div>
          <div>Manzanares</div>
        </div>
        <div className="text-white">
          <Typing />
        </div>
      </div>
    </motion.div>
  )
}

export default MobileHomeSection
