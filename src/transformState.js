'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
        continue;

      case 'addProperties':
        Object.assign(state, action.extraData);
        continue;

      case 'removeProperties':
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
        continue;
    }
  }
}

module.exports = transformState;
