'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(function(elem) {
    switch (elem.type) {
      case 'addProperties':
        Object.assign(state, elem.extraData);
        break;

      case 'removeProperties':
        for (const key of elem.keysToRemove) {
          delete state[key];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  });
}

module.exports = transformState;
