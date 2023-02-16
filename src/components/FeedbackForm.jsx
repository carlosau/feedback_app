import Card from "./shared/Card"
import { useContext, useState, useEffect } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "@/context/FeedbackContext"

export default function FeedbackForm() {
  const { text, setText } = useContext(FeedbackContext)
  const { ratingOutput, setRatingOutput } = useContext(FeedbackContext)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Message must be longer than 10 characters")
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSelectRating = (ratingInput) => {
    setRatingOutput(ratingInput)
  }

  const {
    feedback,
    addItem,
    editFeedback,
    updateItem,
    setRenderAvg,
    selected,
  } = useContext(FeedbackContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10 && selected != undefined) {
      const newFeedback = {
        text: text,
        rating: ratingOutput,
      }
      setMessage("")
      if (editFeedback.edit === true) {
        updateItem(editFeedback.item.id, newFeedback)
        const ratingToExclude = editFeedback.item.rating
        const total =
          feedback.reduce((acc, cur) => {
            return acc + cur.rating
          }, 0) - ratingToExclude
        const calcAvgUpd = (valueTotal, valueIndivual) => {
          return (valueTotal + valueIndivual) / feedback.length
        }
        setRenderAvg(
          calcAvgUpd(total, newFeedback.rating)
            .toFixed(1)
            .replace(/[.,]0$/, "")
        )
        editFeedback.edit = false
      } else {
        addItem(newFeedback)
        document.querySelector("form").reset
        setText("")
      }
    } else if (selected != undefined && text.trim().length <= 10) {
      setMessage("Message must be longer than 10 characters")
    } else {
      setMessage("Select rating above of 1 from 10")
    }
  }

  useEffect(() => {
    if (editFeedback.edit === true) {
      setBtnDisabled(false)
      setText(editFeedback.item.text)
      setRatingOutput(editFeedback.item.rating)
    }
  }, [editFeedback])

  return (
    <Card>
      <form onSubmit={handleSubmit} className="p-[10px]">
        <h2 className="pb-[3px] text-center text-slate-100">
          Leave your Feedback:
        </h2>
        <div className="w-full text-center">
          <RatingSelect select={handleSelectRating} />
          <input
            className="w-[560px] relative mt-[3px] py-[8px] pl-[8px] items-center rounded-md"
            onChange={handleTextChange}
            type="text"
            name=""
            id=""
            placeholder="Write here your message"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
          {message && <p className="text-slate-200 py-[2px]">{message}</p>}
        </div>
      </form>
    </Card>
  )
}
