'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const i in actions) {
    const condition = actions[i].type;

    if (condition === 'addProperties') {
      const add = actions[i].extraData;

      Object.assign(state, add);
    } else if (condition === 'removeProperties') {
      const remove = actions[i].keysToRemove;

      if (remove.length > 1) {
        for (const key of remove) {
          delete state[key];
        }
      } else {
        delete state[remove];
      }
    } else if (condition === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
