'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      switch (action[key]) {
        case 'addProperties':
          Object.assign(state, action.extraData);
          break;

        case 'removeProperties':
          for (const prop in action.keysToRemove) {
            delete state[action.keysToRemove[prop]];
          };
          break;

        case 'clear':
          for (const keyName in state) {
            delete state[keyName];
          }
          break;
      }
    }
  }
}

module.exports = transformState;
