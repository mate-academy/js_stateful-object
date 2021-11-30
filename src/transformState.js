'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case (action['type'] === 'clear'):
        for (const key in state) {
          delete state[key];
        };
        break;

      case (action['type'] === 'addProperties'):
        Object.assign(state, action.extraData);
        break;

      case (action['type'] === 'removeProperties'):
        for (const key of action['keysToRemove']) {
          if (key in state) {
            delete state[key];
          }
        };
        break;
    }
  }

  return state;
}

module.exports = transformState;
