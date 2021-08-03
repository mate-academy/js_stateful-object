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
        act.keysToRemove.forEach(element => {
          delete state[element];
        });
        break;

      case 'clear':
        Object.keys(state).forEach(element => {
          delete state[element];
        });
    }
  }
}

module.exports = transformState;
