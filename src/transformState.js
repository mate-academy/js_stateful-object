'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'removeProperties':
        const keysToRemove = actions[i].keysToRemove;

        for (let j = 0; j < keysToRemove.length; j++) {
          delete state[keysToRemove[j]];
        }
        break;
    }
  }
}

module.exports = transformState;
