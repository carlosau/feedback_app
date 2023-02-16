import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "@/context/FeedbackContext"

export default function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)

  if (feedback.length === 0 || !feedback) {
    return <p>No Feedbacks</p>
  } else {
    return (
      <div className="w-full">
        <AnimatePresence>
          {feedback.map((item, index) => (
            <motion.div
              key={index}
              item={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={index} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
  }
}
