'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, { ...action.extraData });
        break;
      case 'removeProperties':
        const bro = action.keysToRemove;

        for (const n of bro) {
          delete state[n];
        }
        break;

      case 'clear':
        for (const ch in state) {
          delete state[ch];
        }
    }
  }

  return state;
}

module.exports = transformState;
