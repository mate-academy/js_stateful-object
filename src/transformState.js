'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        for (const property of act.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  }п
}

module.exports = transformState;
