'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObj of actions) {
    switch (true) {
      case (actionObj.type === 'addProperties'):
        Object.assign(state, actionObj.extraData);
        break;

      case (actionObj.type === 'removeProperties'):
        for (const element of actionObj.keysToRemove) {
          delete state[element];
        }
        break;

      case (actionObj.type === 'clear'):
        for (const prop in state) {
          if (state.hasOwnProperty(prop)) {
            delete state[prop];
          }
        }
        Object.assign(state, actionObj.extraData);
    }
  }

  return state;
}

module.exports = transformState;
