'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    for (const type in property) {
      if (property[type] === 'addProperties') {
        Object.assign(state, property.extraData);
      }

      if (property[type] === 'removeProperties') {
        for (const element of property['keysToRemove']) {
          if (element in state) {
            delete state[element];
          }
        }
      }

      if (property[type] === 'clear') {
        for (const key in state) {
          delete state[key];
        }
      }
    }
  }
}

module.exports = transformState;
