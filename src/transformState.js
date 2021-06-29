'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;

      case 'removeProperties':
        const values = Object.values(action.keysToRemove);

        for (const value of values) {
          if (state[value]) {
            delete state[value];
          }
        }
        break;

      case 'addProperties':
        Object.assign(state, action.extraData);
    }
  }

  return state;
}

module.exports = transformState;
