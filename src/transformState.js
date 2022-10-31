'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    switch (actions[key]['type']) {
      case 'addProperties':
        Object.assign(state, actions[key]['extraData']);
        break;

      case 'removeProperties':
        const val = Object.values(actions[key]['keysToRemove']);

        for (let i = 0; i < val.length; i++) {
          delete state[val[i]];
        }
        break;

      case 'clear':
        for (const keyState in state) {
          delete state[keyState];
        }
        break;
    }
  }
}

module.exports = transformState;
