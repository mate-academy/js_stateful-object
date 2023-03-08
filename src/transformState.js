'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const obj = action;
    const { type } = obj;

    if (type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (type === 'removeProperties') {
      const itemsRemove = obj.keysToRemove;

      for (const keyToRemove of itemsRemove) {
        if (state[keyToRemove]) {
          delete state[keyToRemove];
        }
      }
    }

    if (type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
