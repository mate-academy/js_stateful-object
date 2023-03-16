'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const transformState = (state, actions) => {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;

      default:
        return 'ERROR. Please check data';
    }
  }
};

module.exports = transformState;
