'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const data of actions) {
    switch (data.type) {
      case 'clear' :
        for (const clear in state) {
          delete state[clear];
        }
        break;
      case 'removeProperties' :
        for (const remove of data.keysToRemove) {
          delete state[remove];
        }
        break;
      case 'addProperties' :
        Object.assign(state, data.extraData);
    }
  }

  return state;
}

module.exports = transformState;
