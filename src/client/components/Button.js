import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onclick, text }) =>
  <button onClick={onclick}>{text}</button>

Button.propTypes = {
  onclick: PropTypes.func,
  text: PropTypes.string,
}

Button.defaultProps = {
  onclick: null,
  text: '',
}

export default Button
