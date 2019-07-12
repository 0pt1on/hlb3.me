// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { shallow } from 'enzyme'

// Custom file imports
import AboutMe from '../../react/components/home/about-me/about-me.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const EXPECTED_HEADER_TEXT = `HELLO! I'M LEE, A FULL-STACK DEVELOPER.`

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<AboutMe />', () => {
  it('renders header with appropriate text', () => {
    const wrapper = shallow(<AboutMe />)
    const headerContainer = wrapper.find('div')
    const headerText = wrapper.find('h2').text()
    expect(headerContainer).toHaveLength(1)
    expect(headerText).toEqual(EXPECTED_HEADER_TEXT)
  })
})
