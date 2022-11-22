'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        const dataToAdd = Object.entries(action.extraData);

        for (const data of dataToAdd) {
          state[data[0]] = data[1];
        }
        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          if (keyToRemove in state) {
            delete state[keyToRemove];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  });
}

module.exports = transformState;
