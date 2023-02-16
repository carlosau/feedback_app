import Link from "next/link"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { FaEdit } from "react-icons/fa"

export default function About() {
  return (
    <div className="m-auto w-[768px] pt-[140px] px-[60px]">
      <h1 className="text-2xl pb-7 text-center">About this App</h1>
      <div>
        <span className="text-2xl">H</span>ello, welcome to Feedback App.
      </div>
      <div>
        My name is Carlos Souza and I'm a Full Stack Web Developer from Brazil.
      </div>
      <div>
        This is a Next JS improved version from the original project "React
        feedback App" from the Brad Traversy Course "React Front to Back". Here
        are main improves from the original version:
        <li className="px-6">
          Edit Fix: In the original version developed by Brad Traversy when you
          click in the edit button (
          <FaEdit size={15} className="inline-block mx-1" />) you need to reload
          the page if you want to create a new feedback. I fixed it resetting
          the boolean value of edit after the submit button is clicked.
        </li>
        <li className="px-6">
          Rating validation: The user need to choose a rating 1 from 10 before
          to Submit the feedback.
        </li>
        <li className="px-6">
          Rating Average Update: After edit a feedback and change the value of
          rating, the average rating also will be updated.
        </li>
        <div>
          The app was developed using React JS, Next JS and Tailwind CSS.
        </div>
        <div>
          You can check all project files in my github:{" "}
          <a href="www.github.com" className="hover:underline text-blue-500">
            Feedback App
          </a>
        </div>
      </div>
      <div>
        Access Brad Traversy Course here:{" "}
        <a
          href="https://www.traversymedia.com/Modern-React-Front-To-Back-Course"
          className="hover:underline text-blue-500"
        >
          React Front to Back Course
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/">
          <BsFillArrowLeftCircleFill
            size={32}
            className="text-slate-400 hover:text-slate-500"
          />
        </Link>
      </div>
    </div>
  )
}
