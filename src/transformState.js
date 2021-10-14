'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }

      continue;
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);

      continue;
    }

    if (action.type === 'removeProperties') {
      for (const prop of action.keysToRemove) {
        delete state[prop];
      }

      continue;
    }
  }
}

module.exports = transformState;
