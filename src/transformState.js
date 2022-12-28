'use strict';

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        action.keysToRemove.forEach(key => delete state[key]);
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
      default:
        break;
    }
  }
}

module.exports = transformState;
