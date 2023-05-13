'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    const point = actions[action];

    if (point.type === 'addProperties') {
      Object.assign(state, point.extraData);
    }

    if (point.type === 'removeProperties') {
      for (let i = 0; i < point.keysToRemove.length; i++) {
        delete state[point.keysToRemove[i]];
      }
    }

    if (point.type === 'clear') {
      for (const n in state) {
        delete state[n];
      }
    }
  }

  return state;
}

module.exports = transformState;
