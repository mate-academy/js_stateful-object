'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    const { type, extraData, keysToRemove } = act;

    switch (type) {
      case 'addProperties' :
        Object.assign(state, extraData);
        break;

      case 'removeProperties' :
        for (const i of keysToRemove) {
          delete state[i];
        }
        break;

      case 'clear' :
        for (const i in state) {
          delete state[i];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
