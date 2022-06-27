'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const key of act.keysToRemove) {
          delete state[key];
        }
        break;

      case 'addProperties':
        Object.assign(state, act.extraData);
        break;
    }
  }

  return state;
}

module.exports = transformState;
