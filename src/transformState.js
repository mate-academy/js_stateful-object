'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(elem => {
    if (elem.type === 'addProperties') {
      Object.keys(elem.extraData).forEach(function(key) {
        state[key] = elem.extraData[key];
      });
    };

    if (elem.type === 'removeProperties') {
      Object.keys(elem.keysToRemove).forEach(function(key) {
        delete state[elem.keysToRemove[key]];
      });
    };

    if (elem.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    };
  });

  return state;
}

module.exports = transformState;
