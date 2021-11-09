'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    for (const key in action) {
      switch (true) {
        case (action[key] === 'addProperties'): {
          Object.assign(state, action.extraData);
          break;
        }

        case (action[key] === 'removeProperties'): {
          for (const props of action.keysToRemove) {
            delete state[props];
          }
          break;
        }

        case (action[key] === 'clear'): {
          for (const keys in state) {
            delete state[keys];
          }
          break;
        }
      }
    }
  }
}

module.exports = transformState;
