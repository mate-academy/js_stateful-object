'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case ('addProperties'):
        Object.assign(state, key.extraData);
        break;
      case ('removeProperties'):
        for (const removed of key.keysToRemove) {
          delete state[removed];
        }
        break;
      case ('clear'):
        for (const rubbish in state) {
          delete state[rubbish];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
