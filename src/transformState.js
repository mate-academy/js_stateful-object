'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, { ...obj.extraData });
        break;

      case 'removeProperties':
        const deleteData = obj.keysToRemove;

        for (const deleteKey of deleteData) {
          delete state[deleteKey];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        return false;
    }
  }

  return state;
}

module.exports = transformState;
