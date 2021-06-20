'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === 'clear') {
      Object.keys(state).forEach(n => delete state[n]);
    }

    if (action.type === 'addProperties') {
      Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      action.keysToRemove.forEach(n =>
        Object.prototype.hasOwnProperty.call(state, n) && delete state[n]
      );
    }
  }
}

module.exports = transformState;
