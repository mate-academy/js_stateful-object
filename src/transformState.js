'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    for (const element in obj) {
      const value = obj[element];
      const extraData = obj.extraData;
      const keysToRemove = obj.keysToRemove;

      if (value === 'addProperties') {
        for (const addItem in extraData) {
          state[addItem] = extraData[addItem];
        }
      }

      if (value === 'removeProperties') {
        for (const removeItem in keysToRemove) {
          delete state[keysToRemove[removeItem]];
        }
      }

      if (value === 'clear') {
        for (const property in state) {
          delete state[property];
        }
      }
    }
  }
}

module.exports = transformState;
