'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
// eslint-disable-next-line no-shadow
function transformState(state, actions) {
  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (const b of i.keysToRemove) {
        delete state[b];
      }
    }

    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
