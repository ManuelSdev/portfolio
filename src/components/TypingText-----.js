import React from "react"
import "../assets/css/typing.scss"
//import typing from "../assets/js/typing"

const TypingText = ({ textList }) => {
  React.useEffect(() => {
    console.log("================")
    const eleRef = document.querySelector("#feature-text")
    console.log("@@@@@@@@", eleRef.innerHTML)
    //eleRef.insertAdjacentHTML("beforeend", "jajajaj")
    // eleRef.classList.add("vuamoss")
    console.log("########", eleRef.getAttribute("class"))

    const carouselText = [
      { text: "Apple", color: "text-red-600" },
      { text: "Orange", color: "text-blue-600" },
      { text: "Lemon", color: "text-green-600" },
    ]
    async function typeSentence(sentence, eleRef, delay = 100) {
      const letters = sentence.split("")
      letters.map(async letter => {
        await waitForMs(delay)
        eleRef.insertAdjacentHTML("beforeend", letter)
      })
      /*
      let i = 0
      while (i < letters.length) {
        await waitForMs(delay)
        eleRef.insertAdjacentHTML("beforeend", letters[i])
        i++
      }
      return
      */
    }

    async function deleteSentence(eleRef) {
      const sentence = eleRef.innerHTML
      const letters = sentence.split("")
      let i = 0
      while (letters.length > 0) {
        await waitForMs(100)
        letters.pop()
        eleRef.innerHTML = letters.join("")
      }
    }
    function updateFontColor(eleRef, color) {
      // eleRef.setAttribute("color", color)
      // eleRef.classList.add(`text-${color}-600`)
      eleRef.setAttribute("class", color)
    }

    function waitForMs(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    async function carousel(carouselList, eleRef) {
      var i = 0
      while (true) {
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef)
        await waitForMs(1500)
        await deleteSentence(eleRef)
        await waitForMs(500)
        i++
        if (i >= carouselList.length) {
          i = 0
        }
      }
    }

    carousel(carouselText, eleRef)
  }, [])

  return (
    <div className="body-">
      <div className="typing-container">
        <span id="sentence" className="sentence">
          Here, take this{" "}
        </span>
        <span id="feature-text"></span>
        <span className="input-cursor"></span>
      </div>
    </div>
  )
}

export default TypingText
