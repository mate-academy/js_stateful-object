'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let res = {};

  for (const action of actions) {
    if (action.type === 'addProperties') {
      res = Object.assign(state, action.extraData);
    }

    if (action.type === 'removeProperties') {
      res = action.keysToRemove.forEach(key => delete state[key]);
    }

    if (action.type === 'clear') {
      res = Object.keys(state).forEach(key => delete state[key]);
    }
  }

  return res;
}

module.exports = transformState;
