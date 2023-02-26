'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const firstObj = actions[i];

    if (firstObj.type === 'addProperties') {
      const secondObj = firstObj.extraData;

      for (const key in secondObj) {
        state[key] = secondObj[key];
      }
    }

    if (firstObj.type === 'removeProperties') {
      const secondObj = firstObj.keysToRemove;

      for (const key of secondObj) {
        delete state[key];
      }
    }

    if (firstObj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
