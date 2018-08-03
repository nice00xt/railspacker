import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { HelloReact } from '../src/components/hello_react'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <HelloReact name="React" />,
    document.getElementById('root')
  )
})
