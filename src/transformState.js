'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties' :
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties' :
        const arr = act.keysToRemove;

        for (const key of arr) {
          delete state[key];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
