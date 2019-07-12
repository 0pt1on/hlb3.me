// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import ReactDOM from 'react-dom'

// Custom file imports
import App from '../../react/app.js'

/// /////////////////////////////////////////////////
// T E S T S
/// /////////////////////////////////////////////////

describe('<App />', () => {
  it('renders without crashing', () => {
    window.HTMLCanvasElement.prototype.getContext = () => {}
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
