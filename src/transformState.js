'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;
      case 'removeProperties':
        for (const keyword of obj.keysToRemove) {
          delete state[keyword];
        };
        break;
      case 'clear':
        for (const properties of Object.keys(state)) {
          delete state[properties];
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
