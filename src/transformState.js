'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const step of actions) {
    switch (step.type) {
      case 'addProperties':
        for (const addData in step.extraData) {
          state[addData] = step.extraData[addData];
        }
        break;
      case 'removeProperties':
        for (const removeData of step.keysToRemove) {
          delete state[removeData];
        }
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  }
}

module.exports = transformState;
