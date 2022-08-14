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

      case 'removeProperties':
        for (const del of actions[i].keysToRemove) {
          delete state[del];
        }
        break;

      case 'clear':
        for (const clear in state) {
          delete state[clear];
        }
        break;
    }
  };
}

module.exports = transformState;
