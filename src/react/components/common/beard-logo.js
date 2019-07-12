// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'

// Images
import LOGO from '../../../assets/images/melee_beard.png'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const IMAGE_STYLE = 'block logo small'
const IMAGE_ALT_TEXT = 'logo'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

export default function BeardLogo () {
  return (
    <img className={IMAGE_STYLE} alt={IMAGE_ALT_TEXT} src={LOGO} />
  )
}
