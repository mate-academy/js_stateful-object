'use strict';

function transformState(state, transforms) {
  for (const transform of transforms) {
    switch (transform.operation) {
      case 'addProperties':
        Object.assign(state, transform.properties);
        break;

      case 'removeProperties':
        transform.properties.forEach(items => delete state[items]);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
