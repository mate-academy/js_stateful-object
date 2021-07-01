'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const removableKey of action.keysToRemove) {
          delete state[removableKey];
        }
        break;

      case 'clear':
        for (const keyToClear in state) {
          delete state[keyToClear];
        }
        break;
    }
  }
}

module.exports = transformState;
