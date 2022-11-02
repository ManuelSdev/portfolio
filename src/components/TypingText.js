import React from "react"
//import "../assets/css/typing.scss"
//import typing from "../assets/js/typing"

const TypingText = ({ sentenceArray }) => {
  console.log(sentenceArray)

  const [text, setText] = React.useState("")

  console.log("@@@@@@@@@@@@@@")

  React.useEffect(() => {
    console.log("first")
    const carouselText = [
      { text: "Apple", color: "text-red-600" },
      { text: "Orange", color: "text-blue-600" },
      { text: "Lemon", color: "text-green-600" },
    ]

    function waitForMs(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }
    const wait = (fn, item, ms) =>
      setTimeout(() => {
        fn()
        console.log(item)
      }, ms)

    async function typeSentence(sentence, delay = 5000) {
      // const letters = sentence.split("")

      // await waitForMs(delay)
      const time = setTimeout(() => {
        setText(sentence.slice(0, text.length + 1))
        // console.log(letter)
      }, 1000)

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
    const time = setTimeout(() => {
      setText("12345".slice(0, text.length + 1))
      // console.log(letter)
    }, 1000)
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
    //  typeSentence("1234")
    return () => clearTimeout(time)
  }, [])

  return <span>{text}</span>
}

export default TypingText
