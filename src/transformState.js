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
        break;

      case 'clear':
        for (const stateKeys in state) {
          delete state[stateKeys];
        }
        break;

      case 'removeProperties':

        for (const Prop of action.keysToRemove) {
          delete state[Prop];
        }
        break;

      default:
        throw Error('error');
    }
  }

  return state;
}

module.exports = transformState;
