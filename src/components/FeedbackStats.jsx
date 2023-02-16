import { useContext, useEffect, useState } from "react"
import FeedbackContext from "@/context/FeedbackContext"

export default function FeedbackStats() {
  const { feedback, calcAvg, renderAvg, setRenderAvg } =
    useContext(FeedbackContext)

  useEffect(() => {
    setRenderAvg(
      calcAvg()
        .toFixed(1)
        .replace(/[.,]0$/, "")
    )
  }, [feedback.length])

  return (
    <div className="flex justify-between mx-[40px] font-bold text-lg text-slate-600">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average: {feedback.length != 0 ? renderAvg : "0"}</h4>
    </div>
  )
}
