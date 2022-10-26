'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const transformState = (state, actions) => {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[[key]];
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
        break;
    }
  }

  return state;
};

module.exports = transformState;
