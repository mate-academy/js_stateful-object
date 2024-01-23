'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, { ...action.extraData });
        break;
      case 'removeProperties':
        const allProperties = action.keysToRemove;

        for (const property of allProperties) {
          delete state[property];
        }
        break;

      case 'clear':
        for (const ch in state) {
          delete state[ch];
        }
        break;

      default: return `invalid type of action`;
    }
  }

  return state;
}

module.exports = transformState;
