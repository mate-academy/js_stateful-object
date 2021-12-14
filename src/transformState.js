'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((elem) => {
    if (elem.type === 'addProperties') {
      Object.assign(state, elem.extraData);
    }

    if (elem.type === 'removeProperties') {
      for (const key of elem.keysToRemove) {
        delete state[key];
      }
    }

    if (elem.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });
}

module.exports = transformState;
