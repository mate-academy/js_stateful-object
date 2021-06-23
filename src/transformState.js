'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(function(elem) {
    if (elem.type === 'addProperties') {
      for (const key in elem.extraData) {
        state[key] = elem.extraData[key];
      }
    }

    if (elem.type === 'removeProperties') {
      for (const key in elem.keysToRemove) {
        delete state[elem.keysToRemove[key]];
      }
    }

    if (elem.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}

module.exports = transformState;
