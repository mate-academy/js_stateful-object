'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const objects of actions) {
    const { type, extraData, keysToRemove } = objects;

    switch (type) {
      case 'addProperties' :
        Object.assign(state, extraData);
        break;

      case 'removeProperties' :
        for (const deleteValue of keysToRemove) {
          delete state[deleteValue];
        }
        break;

      case 'clear' :
        for (const deleteAll in state) {
          delete state[deleteAll];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
