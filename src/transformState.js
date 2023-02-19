'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem of actions) {
    if (elem.type === 'addProperties') {
      Object.assign(state, elem.extraData);
    }

    if (elem.type === 'removeProperties') {
      for (const key of elem.keysToRemove) {
        delete state[key];
      }
    }

    if (elem.type === 'clear') {
      Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

module.exports = transformState;
