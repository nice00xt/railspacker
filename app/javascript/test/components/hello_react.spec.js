import React from 'react'
import { shallow } from 'enzyme'
import { HelloReact } from '../../src/components/hello_react'

describe('Render component', () => {
  const wrapper = shallow(<HelloReact />)

  it('render component', () => {
    expect(wrapper.exist)
  })
})
