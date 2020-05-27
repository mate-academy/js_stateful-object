'use strict';

function transformState(state, transforms) {
  let transformedState = state;

  for (const transform of transforms) {
    switch (transform.operation) {
      case 'addProperties':
        transformedState = Object.assign(
          transformedState,
          transform.properties
        );
        break;

      case 'removeProperties':
        transform.properties.forEach(items => delete transformedState[items]);
        break;

      case 'clear':
        for (const key in transformedState) {
          delete transformedState[key];
        }
        break;
    }
  }

  return transformedState;
}

module.exports = transformState;
