'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const obj in actions) {
    const type = actions[obj].type;

    if (type === 'addProperties') {
      const addProp = actions[obj].extraData;

      for (const prop in addProp) {
        state[prop] = addProp[prop];
      }
    }

    if (type === 'removeProperties') {
      const keys = actions[obj].keysToRemove;

      for (const key in keys) {
        delete state[keys[key]];
      }
    }

    if (type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  }

  return state;
}

module.exports = transformState;
