'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      Object.assign(state, actions[i].extraData);
    } else if (actions[i].type === 'removeProperties') {
      const keysDelete = actions[i].keysToRemove;
      for (const key in state) {
        for (let x = 0; x <= keysDelete.length; x++) {
          if (key.includes(keysDelete[x])) {
            delete state[key];
          }
        }
      }
    } else if (actions[i].type === 'clear') {
      for (const k in state) {
        delete state[k];
      }
    }
  }

  return state;
}

module.exports = transformState;
