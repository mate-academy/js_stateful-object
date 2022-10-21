'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const transformState = (state, actions) => {
  for (const action of actions) {
    switch (action.type) {
      case 'clear' :
        for (const property in state) {
          delete state[property];
        }
        break;

      case 'removeProperties':
        for (const property of action.keysToRemove) {
          delete state[property];
        }
        break;

      case 'addProperties' :
        Object.assign(state, action.extraData);
        break;

      default: {
        throw new Error('Error. Check input');
      }
    }
  }

  return state;
};

module.exports = transformState;
