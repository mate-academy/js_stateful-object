'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const data in action.extraData) {
        state[data] = action.extraData[data];
      }
    } else if (action.type === 'removeProperties') {
      for (const toRemove of action.keysToRemove) {
        delete state[toRemove];
      }
    } else {
      for (const key in state) {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
