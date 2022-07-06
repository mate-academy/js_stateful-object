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
        for (const propToBeRemoved of action.keysToRemove) {
          delete state[propToBeRemoved];
        };
        break;

      case `clear`:
        for (const elementOfState in state) {
          delete state[elementOfState];
        }
        break;

      default:
        return undefined;
    }
  }
}

module.exports = transformState;
