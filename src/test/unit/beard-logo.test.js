// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { shallow } from 'enzyme'

// Custom file imports
import BeardLogo from '../../react/components/common/beard-logo'
import LOGO from '../../assets/images/melee_beard.png'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const EXPECTED_LOGO_SOURCE = LOGO

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<BeardLogo />', () => {
  it('renders expected image', () => {
    const wrapper = shallow(<BeardLogo />)
    const logoSource = wrapper.find('img').prop('src')
    expect(logoSource).toEqual(EXPECTED_LOGO_SOURCE)
  })
})
