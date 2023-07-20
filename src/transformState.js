'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          if (state[prop]) {
            delete state[prop];
          }
        }
        break;

      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        break;

      default:
        throw new Error('Unknown action');
    }
  }
}

module.exports = transformState;
