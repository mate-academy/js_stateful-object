'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const actionObj of actions) {
    switch (actionObj.type) {
      case ('addProperties'):
        Object.assign(state, actionObj.extraData);
        break;

      case ('removeProperties'):
        for (const element of actionObj.keysToRemove) {
          delete state[element];
        }
        break;

      case ('clear'):
        for (const prop in state) {
          delete state[prop];
        }
        Object.assign(state, actionObj.extraData);
    }
  }

  return state;
}

module.exports = transformState;
