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
        };
        break;
      case 'addProperties':
        const data = action.extraData;

        Object.assign(state, data);
        break;
      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          if (keyToRemove in state) {
            delete state[keyToRemove];
          }
        }
        break;
    }
  }
}

module.exports = transformState;
