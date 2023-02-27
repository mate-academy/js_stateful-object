'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const current = actions[i];

    switch (true) {
      case current.type === 'addProperties':
        const first = current.extraData;

        for (const key in first) {
          state[key] = first[key];
        }
        break;

      case current.type === 'removeProperties':
        const second = current.keysToRemove;

        for (const key of second) {
          delete state[key];
        }
        break;

      case current.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  };

  return state;
}

module.exports = transformState;
