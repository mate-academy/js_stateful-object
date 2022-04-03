'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        const innerObj = Object.assign({}, action.extraData);

        for (const key in innerObj) {
          state[key] = innerObj[key];
        }
        break;

      case 'removeProperties' :
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear' :
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
