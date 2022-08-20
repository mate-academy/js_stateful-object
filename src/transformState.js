'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        };
        break;

      case 'clear':
        const allProperties = Object.keys(state);

        allProperties.forEach(key => {
          delete state[key];
        });
        break;
    }
  }

  return state;
}
module.exports = transformState;
