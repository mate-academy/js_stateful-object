'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'removeProperties':
        const { keysToRemove } = action;

        for (const keyRemove of keysToRemove) {
          delete state[keyRemove];
        }

        break;

      case 'addProperties':
        const { extraData } = action;

        Object.assign(state, extraData);

        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }

        break;
    }
  }
}

module.exports = transformState;
