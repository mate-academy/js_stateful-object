'use strict';

/**
 * @param {Object} stateObj
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case ('addProperties'):
        Object.assign(state, action.extraData);
        break;

      case ('clear'):
        for (const key in state) {
          delete state[key];
        }
        break;

      case ('removeProperties'):
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      default:
        throw Error(`Action type ${action.type} is not found`);
    }
  }

  return state;
}

module.exports = transformState;
