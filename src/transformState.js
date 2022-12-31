'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    switch (elem.type) {
      case 'addProperties':
        Object.assign(state, elem.extraData);
        break;

      case 'removeProperties':
        for (const key in state) {
          for (const elem1 of elem.keysToRemove) {
            if (key === elem1) {
              delete state[key];
            }
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
