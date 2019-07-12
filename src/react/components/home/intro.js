// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom file imports
import Name from '../common/name.js'
import BeardLogo from '../common/beard-logo.js'
import Socials from '../common/socials.js'
import AboutMe from './about-me/about-me.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const INTRO_STYLE = 'intro flex center column'
// const ICON = 'chevron-down'
// const ICON_STYLE = 'icon floating floor'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function Intro () {
  return (
    <div className={INTRO_STYLE}>
      <Name />
      <BeardLogo />
      <Socials />
      <AboutMe />
      {/* <FontAwesomeIcon className={ICON_STYLE} icon={ICON} /> */}
    </div>
  )
}

export default Intro
