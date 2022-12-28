'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties' :
        Object.assign(state, action.extraData);
        break;

      case action.type === 'removeProperties' :
        for (const keys of action.keysToRemove) {
          if (state.hasOwnProperty(keys)) {
            delete state[keys];
          };
        }
        break;

      case action.type === 'clear' :

        for (const prop in state) {
          delete state[prop];
        }
        break;
      default:
        throw new Error('Unexpected state');
    }
  }
}

module.exports = transformState;
