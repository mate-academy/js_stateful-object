'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
    }

    switch (action.type) {
      case 'removeProperties':
        for (let k = 0; k < action.keysToRemove.length; k++) {
          if (state[action.keysToRemove[k]]) {
            delete state[action.keysToRemove[k]];
          }
        }
    }

    switch (action.type) {
      case 'clear':
        for (const prop in state) {
          delete state[prop];
        }
    }
  }
}

module.exports = transformState;
