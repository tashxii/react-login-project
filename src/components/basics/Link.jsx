import React from "react"
import PropTypes from "prop-types"

const Link = (props) => {
  const textStyle = { color: "blue", cursor: "pointer", textDecoration: "underline" }
  return (
    <div style={props.style} onClick={props.onClick}>
      <span style={textStyle}>{props.text}</span>
    </div>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default Link
