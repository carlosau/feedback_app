import { Inter } from "@next/font/google"
import FeedbackList from "@/components/FeedbackList"
import FeedbackStats from "@/components/FeedbackStats"
import FeedbackForm from "@/components/FeedbackForm"
import { FeedbackProvider } from "@/context/FeedbackContext"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <FeedbackProvider>
        <div className="container_stats">
          <FeedbackForm />
          <FeedbackStats />
        </div>
        <div className="container">
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  )
}
