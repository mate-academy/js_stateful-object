'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties': Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (let a = 0; a < actions[i].keysToRemove.length; a++) {
          delete state[actions[i].keysToRemove[a]];
        }
        break;

      case 'clear': for (const key in state) {
        delete state[key];
      }
    }
  }
}
module.exports = transformState;
