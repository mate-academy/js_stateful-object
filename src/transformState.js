'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const item of actions) {
    switch (true) {
      case item.type === 'addProperties':
        Object.assign(state, item.extraData);
        break;

      case item.type === 'removeProperties':
        const removeArray = item.keysToRemove;

        for (const key of removeArray) {
          delete state[key];
        }
        break;

      case item.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
