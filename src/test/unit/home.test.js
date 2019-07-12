// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { shallow } from 'enzyme'

// Custom file imports
import Home from '../../react/components/home/home.js'
import Intro from '../../react/components/home/intro.js'

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<Home />', () => {
  it('contains <Intro /> component', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find(Intro)).toHaveLength(1)
  })
})
