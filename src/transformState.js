'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(obj => {
    if (obj.type === 'addProperties') {
      for (const key in obj.extraData) {
        state[key] = obj.extraData[key];
      }
    } else if (obj.type === 'removeProperties') {
      obj.keysToRemove.forEach(key => {
        delete state[key];
      });
    } else {
      for (const key in state) {
        delete state[key];
      }
    }

    return state;
  });
}

module.exports = transformState;
