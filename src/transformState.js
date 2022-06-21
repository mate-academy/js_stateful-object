'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const type = actions[i].type;

    if (type === 'addProperties') {
      const data = actions[i].extraData;

      for (const key in data) {
        state[key] = data[key];
      }
    }

    if (type === 'removeProperties') {
      const remove = actions[i].keysToRemove;

      for (let y = 0; y < remove.length; y++) {
        if (state[remove[y]]) {
          delete state[remove[y]];
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
