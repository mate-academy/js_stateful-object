'use strict';

// /**
//  * @param {Object} state
//  * @param {Object[]} actions
//  */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
        break;
      case 'clear':
        const keys = Object.keys(state);

        for (let i = 0; i < keys.length; i++) {
          delete state[keys[i]];
        }
        break;
      default:
        return `Unknown action type: ${action.type}`;
    }
  }
}

module.exports = transformState;
