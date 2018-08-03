import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export const HelloReact = props => (
  <div>Hello { props.name }!</div>
)

HelloReact.defaultProps = {
  name: 'JuanX'
}

HelloReact.propTypes = {
  name: PropTypes.string
}