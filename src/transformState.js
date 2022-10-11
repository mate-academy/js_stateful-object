'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const [key, value] of Object.entries(action.extraData)) {
          state[key] = value;
        }
    }

    switch (action.type) {
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }
    }

    switch (action.type) {
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
