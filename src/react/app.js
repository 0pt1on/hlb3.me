// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AOS from 'aos'
import Particles from 'react-particles-js'

// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// Custom file imports
import { PARTICLE_PARAMS, PARTICLE_STYLE } from './util/particles/particle_settings.js'
import Home from './components/home/home.js'

// Create icon library
library.add(fab, faChevronDown)

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const AOS_DURATION = 2000

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function App () {
  // Run hook once
  useEffect(() => { AOS.init({ duration: AOS_DURATION }) }, [])

  return (
    <BrowserRouter>
      <Particles className={PARTICLE_STYLE} params={PARTICLE_PARAMS} />
      <Switch>
        <Route path='*' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
