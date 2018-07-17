import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { Hello } from './hello_react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Hello name="React" />,
    document.getElementById('root')
  )
})
