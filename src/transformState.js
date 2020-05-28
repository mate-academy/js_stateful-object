'use strict';

function transformState(state, transforms) {
  const OPERATIONS = {
    add: 'addProperties',
    remove: 'removeProperties',
    clear: 'clear',
  };

  for (const transform of transforms) {
    switch (transform.operation) {
      case OPERATIONS.add:
        Object.assign(state, transform.properties);
        break;

      case OPERATIONS.remove:
        for (const key of transform.properties) {
          delete state[key];
        };
        break;
      case OPERATIONS.clear:
        for (const value of Object.keys(state)) {
          delete state[value];
        };
        break;
    }
  }
}

module.exports = transformState;
