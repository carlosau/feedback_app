import FeedbackData from "@/data/FeedbackData"
import { createContext, useState } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  })
  const [text, setText] = useState("")
  const [ratingOutput, setRatingOutput] = useState()
  const [selected, setSelected] = useState()

  const calcAvg = (total, current) =>
    feedback.reduce((total, current) => {
      return total + current.rating
    }, 0) / feedback.length

  const [renderAvg, setRenderAvg] = useState(0)

  const deleteItem = (id) => {
    if (window.confirm("Are you sure?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
      setText("")
      setSelected()
    }
  }

  const addItem = (newFeedback) => {
    if (feedback.length === 0) {
      newFeedback.id = 1
      setFeedback([newFeedback, ...feedback])
    } else {
      newFeedback.id = Math.floor(
        (feedback.reduce((acc, cur) => {
          return acc + cur.id
        }, 0) /
          feedback.length) *
          2
      )
      setFeedback([newFeedback, ...feedback])
      setSelected()
    }
  }

  const updateItem = (id, upItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    )
  }

  const editItem = (item) => {
    setEditFeedback({
      item,
      edit: true,
    })
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        text,
        setText,
        ratingOutput,
        setRatingOutput,
        selected,
        setSelected,
        renderAvg,
        setRenderAvg,
        calcAvg,
        deleteItem,
        addItem,
        editItem,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
