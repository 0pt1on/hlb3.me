// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const ABOUT_ME_STYLE = 'about flex center column'
const INTRO_TEXT_STYLE = 'text-reg xlarge'
const TEXT_HIGHLIGHT = 'text-highlight'

const AOS_ANIM_FADE_UP = 'fade-up'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

function AboutMe () {
  return (
    <div className={ABOUT_ME_STYLE}>
      <h2 data-aos={AOS_ANIM_FADE_UP} className={INTRO_TEXT_STYLE}>
        HELLO! I'M <span className={TEXT_HIGHLIGHT}>LEE</span>, A FULL-STACK DEVELOPER.
      </h2>
    </div>
  )
}

export default AboutMe
