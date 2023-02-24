'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (true) {
      case (actions[i].type === 'clear'):
        const keys = Object.keys(state);

        for (let j = 0; j < keys.length; j++) {
          delete state[keys[j]];
        }
        break;

      case (actions[i].type === 'addProperties'):
        Object.assign(state, actions[i].extraData);
        break;

      case (actions[i].type === 'removeProperties'):
        for (const t of actions[i].keysToRemove) {
          delete state[t];
        }
    }
  }

  return state;
}

module.exports = transformState;
