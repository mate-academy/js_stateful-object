'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  actions.forEach(x => {
    if (x.type === 'addProperties') {
      Object.assign(state, x.extraData);
    }

    if (x.type === 'removeProperties') {
      x.keysToRemove.forEach(i => delete state[i]);
    }

    if (x.type === 'clear') {
      Object.keys(state).forEach(k => delete state[k]);
    }
  });

  return state;
}

module.exports = transformState;
