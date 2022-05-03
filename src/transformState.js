'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(elem => {
    switch (elem.type) {
      case 'addProperties':
        for (const key in elem.extraData) {
          state[key] = elem.extraData[key];
        }
        break;
      case 'removeProperties':
        elem.keysToRemove.forEach(item => {
          delete state[item];
        });
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  });

  return state;
}

module.exports = transformState;
