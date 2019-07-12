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

const NAME = { FIRST: 'Henry', MIDDLE: 'Lee', LAST: 'Barton', SUFFIX: 'III' }
const NAME_STYLE = 'name'
const TEXT_HIGHLIGHT = 'text-highlight'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

export default function Name () {
  return (
    <h1 className={NAME_STYLE}>
      {NAME.FIRST} <span className={TEXT_HIGHLIGHT}>{NAME.MIDDLE}</span> {NAME.LAST} {NAME.SUFFIX}
    </h1>
  )
}
