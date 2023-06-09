'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
      case 'removeProperties':
        for (const attr of action.keysToRemove) {
          delete state[attr];
        }
        break;
      case 'clear':
        for (const attr in state) {
          delete state[attr];
        }
        break;
    }
  }
}

module.exports = transformState;
