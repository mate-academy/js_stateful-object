'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(elem => {
    if (elem.type === 'addProperties') {
      for (const key in elem.extraData) {
        state[key] = elem.extraData[key];
      };
    } else if (elem.type === 'removeProperties') {
      elem.keysToRemove.forEach(item => {
        delete state[item];
      });
    } else if (elem.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  });

  return state;
}

module.exports = transformState;
