import PropTypes from "prop-types"

export default function Card({ children }) {
  return (
    <div className="relative rounded-lg m-10 p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}
