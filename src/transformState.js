'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
      switch (action.type) {
        case ('addProperties'): {
          Object.assign(state, action.extraData);
          break;
        }

        case ('removeProperties'): {
          for (const props of action.keysToRemove) {
            delete state[props];
          }
          break;
        }

        case ('clear'): {
          for (const keys in state) {
            delete state[keys];
          }
        }
      }
    }
}

module.exports = transformState;
