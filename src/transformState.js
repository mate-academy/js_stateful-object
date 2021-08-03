'use strict';

function transformState(state, actions) {
  // write code here
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const keyArr of key.keysToRemove) {
          if (state.hasOwnProperty(keyArr)) {
            delete state[keyArr];
          }
        }
        break;

      case 'clear':
        for (const keys in state) {
          delete state[keys];
        }
    }
  }
}

module.exports = transformState;
