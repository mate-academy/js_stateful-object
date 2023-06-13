'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const elem in actions) {
    const action = actions[elem];

    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        for (const item in state) {
          delete state[item];
        };
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;
      default:
        return {};
    }
  }
}

module.exports = transformState;
