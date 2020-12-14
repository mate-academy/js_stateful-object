'use strict';

function transformState(state, transforms) {
  for (const transform of transforms) {
    switch (transform.operation) {
      case ('removeProperties') :
        for (const key of transform.properties) {
          delete state[key];
        }
        break;

      case ('addProperties'):
        Object.assign(state, transform.properties);
        break;

      default:
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
