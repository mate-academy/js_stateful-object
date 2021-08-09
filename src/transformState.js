'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    for (const val in actions[key]) {
      const act = actions[key][val];

      if (act === 'clear') {
        for (const keys in state) {
          delete state[keys];
        }
      }

      if (val === 'keysToRemove') {
        for (const i of act) {
          if (state.hasOwnProperty([i])) {
            delete state[i];
          }
        }
      }

      if (val === 'extraData') {
        Object.assign(state, act);
      }
    }
  }
}

module.exports = transformState;
