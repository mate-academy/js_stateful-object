'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action.type === 'clear'):
        for (const prop in state) {
          delete state[prop];
        }

        break;

      case (action.type === 'addProperties'):
        Object.assign(state, action.extraData);

        break;

      case (action.type === 'removeProperties'): {
        for (const prop of action.keysToRemove) {
          delete state[prop];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
