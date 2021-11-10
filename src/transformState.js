'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'clear': {
        if (action.type === 'clear') {
          for (const key in state) {
            delete state[key];
          }
        }

        break;
      }

      case 'addProperties': {
        Object.assign(state, action.extraData);

        break;
      }

      case 'removeProperties': {
        for (const elem of action.keysToRemove) {
          if (state.hasOwnProperty(elem)) {
            delete state[elem];
          }
        }

        break;
      }
    }
  }
}

module.exports = transformState;
