// Developed by
// Henry Lee Barton III

/// /////////////////////////////////////////////////
// G L O B A L   V A R I A B L E S
/// /////////////////////////////////////////////////

const PARTICLE = {
  COUNT: { DESKTOP: 70, MOBILE: 25 },
  SIZE: 3,
  RANDOM_SIZE: true,
  SHAPE_TYPE: 'edge',
  OUT_MODE: 'bounce',
  MODE: 'repulse',
  REPULSE_DIST: 150
}

/// /////////////////////////////////////////////////
// P A R T I C L E   S E T T I N G S
/// /////////////////////////////////////////////////

// Particle style
export const PARTICLE_STYLE = 'particles'

// Particle params
export const PARTICLE_PARAMS = {
  'particles': {
    'number': {
      'value': (window.innerWidth > 800 ? PARTICLE.COUNT.DESKTOP : PARTICLE.COUNT.MOBILE)
    },
    'size': {
      'random': PARTICLE.RANDOM_SIZE,
      'value': PARTICLE.SIZE
    },
    'shape': {
      'type': PARTICLE.SHAPE_TYPE
    },
    'move': {
      'out_mode': PARTICLE.OUT_MODE
    }
  },
  'interactivity': {
    'events': {
      'onhover': {
        'enable': true,
        'mode': PARTICLE.MODE
      }
    },
    'modes': {
      'repulse': {
        'distance': PARTICLE.REPULSE_DIST
      }
    },
    'detect_on': 'window'
  }
}
