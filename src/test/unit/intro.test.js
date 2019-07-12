// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { shallow } from 'enzyme'

// Custom file imports
import Intro from '../../react/components/home/intro.js'
import Name from '../../react/components/common/name.js'
import BeardLogo from '../../react/components/common/beard-logo'
import Socials from '../../react/components/common/socials'
import AboutMe from '../../react/components/home/about-me/about-me.js'

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<Intro />', () => {
  it('contains <Name /> component', () => {
    const wrapper = shallow(<Intro />)
    expect(wrapper.find(Name)).toHaveLength(1)
  })

  it('contains <BeardLogo /> component', () => {
    const wrapper = shallow(<Intro />)
    expect(wrapper.find(BeardLogo)).toHaveLength(1)
  })

  it('contains <Socials /> component', () => {
    const wrapper = shallow(<Intro />)
    expect(wrapper.find(Socials)).toHaveLength(1)
  })

  it('contains <AboutMe /> component', () => {
    const wrapper = shallow(<Intro />)
    expect(wrapper.find(AboutMe)).toHaveLength(1)
  })
})
