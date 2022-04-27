'use strict';

function transformState(state, actions) {
  // write code here
  for (const action in actions) {
    if (actions[action]['type'] === 'addProperties') {
      Object.assign(state, actions[action]['extraData']);
    } else if (actions[action]['type'] === 'removeProperties') {
      for (const key in actions[action]['keysToRemove']) {
        delete state[actions[action]['keysToRemove'][key]];
      }
    } else if (actions[action]['type'] === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    }
  }

  return state;
}

module.exports = transformState;
