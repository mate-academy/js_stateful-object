'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const type = actions[i].type;

    if (type === 'addProperties') {
      const extra = actions[i].extraData;

      Object.assign(state, extra);
    }

    if (type === 'removeProperties') {
      const removeList = actions[i].keysToRemove;

      for (let r = 0; r < removeList.length; r++) {
        delete state[removeList[r]];
      }
    }

    if (type === 'clear') {
      for (const member in state) {
        delete state[member];
      }
    }
  }
}

module.exports = transformState;
