'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObj of actions) {
    switch (actionObj.type) {
      case 'addProperties' :
        Object.assign(state, actionObj.extraData);
        break;

      case 'removeProperties':
        for (const key of actionObj.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const element in state) {
          if (state.hasOwnProperty(element)) {
            delete state[element];
          }
        }
    }
  }

  return state;
}

module.exports = transformState;
