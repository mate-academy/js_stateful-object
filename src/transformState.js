'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, { ...obj.extraData });
    }

    if (obj.type === 'clear') {
      const arayKeys = Object.keys(state);

      for (const key of arayKeys) {
        delete state[key];
      }
    }

    if (obj.type === 'removeProperties') {
      const deleteData = obj.keysToRemove;

      for (const deleteKey of deleteData) {
        delete state[deleteKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
