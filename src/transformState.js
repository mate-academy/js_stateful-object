'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const remove of action.keysToRemove) {
          delete state[remove];
        }
        break;

      case 'clear': {
        for (const clear in state) {
          delete state[clear];
        }
        break;
      }
    }
  }

  return state;
}

module.exports = transformState;
