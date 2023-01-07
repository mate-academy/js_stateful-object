'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    } else if (obj.type === 'removeProperties') {
      for (const keyword of obj.keysToRemove) {
        delete state[keyword];
      }
    } else if (obj.type === 'clear') {
      for (const properties of Object.keys(state)) {
        delete state[properties];
      }
    }
  }

  return state;
}

module.exports = transformState;
