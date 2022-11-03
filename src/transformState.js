'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action['type']) {
      case 'addProperties':
        Object.assign(state, action['extraData']);
        break;

      case 'removeProperties':
        const val = Object.values(action['keysToRemove']);

        val.forEach((element) => {
          delete state[element];
        });
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
