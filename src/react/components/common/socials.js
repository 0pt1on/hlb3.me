// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// R E Q U I R E D   /   C U S T O M   I M P O R T S
/// /////////////////////////////////////////////////

// Required imports
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Custom file imports
import { extraLinks } from '../../util/funcs.js'

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const SOCIALS_STYLE = 'container socials flex center'
const SOCIALS_SIZE = '2x'
const SOCIAL = { GITHUB: ['fab', 'github-square'], LINKED_IN: ['fab', 'linkedin'], TWITTER: ['fab', 'twitter-square'] }
const ICON_STYLE = 'icon social'
const AOS_ANIM = 'zoom-in'

const SOCIAL_LINK_GITHUB_PERSONAL = 'https://github.com/hleebarton97'
const SOCIAL_LINK_GITHUB_PROF = 'https://github.com/gteklee'
const SOCIAL_LINK_LINKED_IN = 'https://www.linkedin.com/in/hlb3'
const SOCIAL_LINK_TWITTER = 'https://twitter.com/Me_Lee_'

/// /////////////////////////////////////////////////
// C O M P O N E N T   D E F I N I T I O N
/// /////////////////////////////////////////////////

export default function Socials () {
  return (
    <div data-aos={AOS_ANIM} className={SOCIALS_STYLE}>
      <FontAwesomeIcon onClick={() => extraLinks([SOCIAL_LINK_GITHUB_PERSONAL, SOCIAL_LINK_GITHUB_PROF])} className={ICON_STYLE} size={SOCIALS_SIZE} icon={SOCIAL.GITHUB} />
      <FontAwesomeIcon onClick={() => extraLinks([SOCIAL_LINK_LINKED_IN])} className={ICON_STYLE} size={SOCIALS_SIZE} icon={SOCIAL.LINKED_IN} />
      <FontAwesomeIcon onClick={() => extraLinks([SOCIAL_LINK_TWITTER])} className={ICON_STYLE} size={SOCIALS_SIZE} icon={SOCIAL.TWITTER} />
    </div>
  )
}
