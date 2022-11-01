import React from "react"
//import "../assets/css/typing.scss"
//import typing from "../assets/js/typing"

const TypingText = ({ sentenceArray }) => {
  //console.log(sentenceArray)

  const [text, setText] = React.useState("a")

  console.log("@@@@@@@@@@@@@@")

  React.useEffect(() => {
    const carouselText = [
      { text: "Apple", color: "text-red-600" },
      { text: "Orange", color: "text-blue-600" },
      { text: "Lemon", color: "text-green-600" },
    ]

    function waitForMs(ms) {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve(true)
          console.log("first")
        }, ms)
      )
    }

    async function typeSentence(sentence, delay = 1000) {
      const letters = sentence.split("")
      letters.forEach(async (letter, index) => {
        const ms = delay + index * 1000
        await waitForMs(ms)
        console.log("================", text)
        console.log("================", text.concat(letter))
        setText(text.concat(letter))
      })
      /*
      let i = 0
      while (i < letters.length) {
        await waitForMs(delay)
        setText(text.concat(letter))
        i++
      }
      return
      */
    }

    async function deleteSentence(delay = 1000) {
      const letters = text.split("")
      letters.forEach(async (letter, index) => {
        await waitForMs(100)
        const indexStr = text.length() - index
        setText(text.substring(0, indexStr))
      })
      /*
      let i = 0
      while (letters.length > 0) {
        await waitForMs(100)
        letters.pop()
        const index = text.length() - 1
        setText(text.substring(0, index))
      }
      */
    }

    const carousel = async sentenceList => {
      sentenceList.forEach(async sentence => {
        await typeSentence(sentence)
        await waitForMs(1500)
        await deleteSentence()
        await waitForMs(500)
      })
      carousel(sentenceList)
    }

    //carousel(sentenceArray)
    typeSentence("1234")
  }, [])

  return <span>{text}</span>
}

export default TypingText
