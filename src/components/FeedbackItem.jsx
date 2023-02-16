import Card from "@/components/shared/Card"
import FeedbackContext from "@/context/FeedbackContext"
import propTypes from "prop-types"
import { useContext } from "react"
import { FaTimes, FaEdit } from "react-icons/fa"

export default function FeedbackItem({ item }) {
  const { deleteItem, editItem } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="absolute border-2 border-slate-300 drop-shadow-md top-[-12px] left-[-12px] w-[45px] h-[45px] font-bold text-slate-600 text-md flex justify-center bg-white items-center rounded-full">
        {item.rating}
      </div>
      <div className="flex">
        <button
          onClick={() => editItem(item)}
          className="absolute right-[35px] top-[10px]"
        >
          <FaEdit color="white" className="mx-[7px]" />
        </button>

        <button
          onClick={() => deleteItem(item.id)}
          className="absolute right-[20px] top-[10px]"
        >
          {" "}
          <FaTimes color="white" />
        </button>
      </div>
      <div className="text-white text-lg flex justify-start items-center p-3">
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
}
