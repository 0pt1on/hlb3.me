// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { shallow } from 'enzyme'

// Custom file imports
import Name from '../../react/components/common/name.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const EXPECTED_HEADER_TEXT = 'Henry Lee Barton III'

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<Name />', () => {
  it('renders header with expected text', () => {
    const wrapper = shallow(<Name />)
    const headerText = wrapper.find('h1').text()
    expect(headerText).toEqual(EXPECTED_HEADER_TEXT)
  })
})
