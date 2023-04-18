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
        for (const type of act.keysToRemove) {
          delete state[type];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
