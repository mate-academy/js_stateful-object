'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    for (const key in actions[i]) {
      if (actions[i][key] === 'clear') {
        for (const x in state) {
          delete state[x];
        }
      }

      if (key === 'keysToRemove') {
        for (const j of actions[i][key]) {
          for (const x in state) {
            if (j === x) {
              delete state[x];
            }
          }
        }
        // eslint-disable-next-line no-console
        console.log(actions[i][key]);
      }

      if (key === 'extraData') {
        Object.assign(state, actions[i][key]);
      }
    }
  }

  return state;
}

module.exports = transformState;
