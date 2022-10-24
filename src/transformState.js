'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case `addProperties`:
        Object.assign(state, action.extraData);
        break;

      case `removeProperties`:
        for (const key of action.keysToRemove) {
          if (key in state) {
            delete state[key];
          }
        }
        break;

      case `clear`:
        Object.keys(state).forEach(key => delete state[key]);
        break;
    }
  }

  return state;
}

module.exports = transformState;
