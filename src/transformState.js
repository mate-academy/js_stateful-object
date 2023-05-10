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

      default:
        const arayKeys = Object.keys(state);

        for (const key of arayKeys) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
