'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (true) {
      case type === 'addProperties' :
        Object.assign(state, extraData);
        break;
      case type === 'removeProperties' :
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
      case type === 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
