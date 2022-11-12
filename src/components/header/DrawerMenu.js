import React from "react"
import BackIcon from "../../assets/svg/arrow-left.svg"

const DrawerMenu = ({ onClose, classes }) => {
  const sections = [
    ["Sobre mí", "#main-section"],
    ["Hard skills", "#hard-skills-sections"],
    ["Soft skills", "#soft-skills-sections"],
    ["Proyectos", "#projects-section"],
    ["Descargar CV", ""],
  ]
  const handleClickOutside = ev => {
    console.log("event.target", ev.target.classList)
    // if (!!!ev.target.class || !ev.target.class.includes("no-close-modal"))
    onClose()
  }

  const a = ev => {
    console.log("---------")
    ev.stopPropagation()
  }
  return (
    <div
      onClick={handleClickOutside}
      id="overlay"
      className={
        "absolute right-0 top-0 left-0 z-20 h-screen translate-x-[100%] bg-black/70 transition-transform duration-[0.6s] ease-[ease] " +
        classes.overlay
      }
    >
      <div
        onClick={a}
        id="menu-wrapper"
        className={
          "absolute top-0 right-0 left-[calc(100%-300px)] h-screen translate-x-[100%] bg-black_2 text-black transition-transform duration-[0.6s] ease-[ease] " +
          classes.wrapper
        }
      >
        <div>
          <div className="flex justify-end border-b-[1px] border-bronze fill-bronze pt-4 pb-4 pr-4">
            <BackIcon
              width="60px"
              height="60px"
              viewBox="0 0 1000 1000"
              className="  "
              onClick={handleClickOutside}
            />
          </div>
          {sections.map(section => {
            const [name, path] = section
            return (
              <div
                className="border-b-[1px] border-bronze placeholder:no-underline"
                key={name}
              >
                <a
                  //to={path}
                  //replace
                  href={path}
                  onClick={onClose}
                  className=" block p-6 font-bold uppercase text-bronze no-underline"
                >
                  {name}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DrawerMenu
