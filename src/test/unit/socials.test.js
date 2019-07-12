// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { shallow } from 'enzyme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom file imports
import Socials from '../../react/components/common/socials.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const EXPECTED_ICONS = [['fab', 'github-square'], ['fab', 'linkedin'], ['fab', 'twitter-square']]

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<Socials />', () => {
  it('renders all icons', () => {
    const wrapper = shallow(<Socials />)
    const icons = wrapper.find(FontAwesomeIcon)
    expect(icons).toHaveLength(3)
  })

  it('renders expected icons', () => {
    const wrapper = shallow(<Socials />)
    wrapper.find(FontAwesomeIcon).forEach((icon, i) => {
      expect(icon.prop('icon')).toEqual(EXPECTED_ICONS[i])
    })
  })

  it('should call function when link is clicked', () => {
    const wrapper = shallow(<Socials />)
    global.open = jest.fn()
    wrapper.find(FontAwesomeIcon).forEach(link => {
      link.simulate('click')
      expect(global.open).toBeCalled()
    })
  })
})
