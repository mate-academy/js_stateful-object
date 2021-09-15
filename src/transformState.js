'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        for (const key in act.extraData) {
          state[key] = act.extraData[key];
        }
        // Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        for (const k of act.keysToRemove) {
          // state[k] = act.keysToRemove[k];
          delete state[k];
        }

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
