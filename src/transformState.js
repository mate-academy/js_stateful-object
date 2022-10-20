'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'clear':
        Object.keys(state).forEach(key => {
          delete state[key];
        });
        break;
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;
      case 'removeProperties':
        act.keysToRemove.forEach(element => {
          delete state[element];
        });
        break;
      default:
        return 'wrong action in actions';
    }
  }
}

module.exports = transformState;
