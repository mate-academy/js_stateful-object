'use strict';

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        for (const action in actions[i].extraData) {
          state[action] = actions[i].extraData[action];
        }
        break;

      case 'removeProperties':
        for (const action of actions[i].keysToRemove) {
          delete state[action];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
