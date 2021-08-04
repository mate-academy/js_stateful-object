'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(element => {
    for (const key in element) {
      if (element[key] === 'addProperties') {
        for (const key2 in element.extraData) {
          state[key2] = element.extraData[key2];
        }
      }

      if (element[key] === 'removeProperties') {
        for (const key2 in element.keysToRemove) {
          delete state[element.keysToRemove[key2]];
        }
      }

      if (element[key] === 'clear') {
        for (const key2 in state) {
          delete state[key2];
        }
      }
    }
  });

  return state;
}

module.exports = transformState;
