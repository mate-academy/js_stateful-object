'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action in actions) {
    switch (true) {
      case actions[action]['type'] === 'addProperties':
        Object.assign(state, actions[action]['extraData']);
        break;

      case actions[action]['type'] === 'removeProperties':
        for (const keyToRemove in actions[action]['keysToRemove']) {
          const propToRemove = actions[action]['keysToRemove'][keyToRemove];

          if (state.hasOwnProperty(propToRemove)) {
            delete state[propToRemove];
          }
        }
        break;

      case actions[action]['type'] === 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;
    }
  }
}

module.exports = transformState;
