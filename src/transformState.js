'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;
      case 'removeProperties':
        obj.keysToRemove.forEach(elem => delete state[elem]);
        break;

      case 'clear':
        for (const elem in state) {
          delete state[elem];
        }
    }
  }

  return state;
}
module.exports = transformState;
