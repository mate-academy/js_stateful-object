'use strict';

function transformState(state, transforms) {
  for (const oneOperation of transforms) {
    if (oneOperation.operation === 'removeProperties') {
      for (const key of oneOperation.properties) {
        delete state[key];
      }
    } else if (oneOperation.operation === 'addProperties') {
      for (const key in oneOperation.properties) {
        state[key] = oneOperation.properties[key];
      }
    } else if (oneOperation.operation === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
