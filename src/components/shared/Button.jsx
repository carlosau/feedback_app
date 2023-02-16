import PropTypes from "prop-types"

export default function Button({ children, type, isDisabled }) {
  const btnSubmitStyle = [
    {
      Disabled:
        "bg-slate-200 text-slate-400 absolute left-[560px] py-[2px] my-[7px] px-[10px] border-2 rounded-md",
      Enabled:
        "absolute cursor-pointer bg-blue-300 left-[560px] py-[2px] my-[7px] px-[10px] border-white border-2 rounded-md hover:drop-shadow-md",
    },
  ]

  return (
    <button
      className={
        isDisabled == true
          ? btnSubmitStyle[0].Disabled
          : btnSubmitStyle[0].Enabled
      }
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: "button",
  isDisabled: false,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}
