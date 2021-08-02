'use strict';

function transformState(state, actions) {
  for (const key of actions) {
    if (key.type === 'addProperties') {
      for (const keyObj in key.extraData) {
        state[keyObj] = key.extraData[keyObj];
      }
    }

    if (key.type === 'removeProperties') {
      for (const keyArr of key.keysToRemove) {
        if (state.hasOwnProperty(keyArr)) {
          delete state[keyArr];
        }
      }
    }

    if (key.type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }
}

module.exports = transformState;
