'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
*/
function transformState(state, actions) {
  for (const elem of actions) {
    if (elem.type === 'addProperties') {
      Object.assign(state, elem['extraData']);
    }

    if (elem.type === 'removeProperties') {
      for (const item of elem['keysToRemove']) {
        delete state[item];
      }
    }

    if (elem.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }
}

module.exports = transformState;
