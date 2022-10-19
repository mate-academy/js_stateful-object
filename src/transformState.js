'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    const type = actions[key].type;

    if (type === 'addProperties') {
      for (const extraDataKey in actions[key].extraData) {
        state[extraDataKey] = actions[key].extraData[extraDataKey];
      }
    }

    if (type === 'removeProperties') {
      const arrRemove = actions[key].keysToRemove;

      for (const i of arrRemove) {
        delete state[i];
      }
    }

    if (type === 'clear') {
      for (const removeKey in state) {
        delete state[removeKey];
      }
    }
  }

  return state;
}

module.exports = transformState;
