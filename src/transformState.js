'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const member in state) {
          delete state[member];
        }
        break;

      case 'removeProperties':
        for (const key in action.keysToRemove) {
          if (state.hasOwnProperty(action.keysToRemove[key])) {
            delete state[action.keysToRemove[key]];
          }
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }
  }
}

module.exports = transformState;
