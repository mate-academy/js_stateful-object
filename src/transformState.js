'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const act of actions) {
    switch (act.type) {
      case ('addProperties'):
        Object.assign(state, act.extraData);
        break;

      case ('removeProperties'):
        for (const item of act.keysToRemove) {
          delete state[item];
        }
        break;

      case ('clear'):
        for (const key in state) {
          delete state[key];
        }
        Object.assign(state, act.extraData);
        break;

      default:
        throw Error;
    }
  }

  return state;
}

module.exports = transformState;
