'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const ob in actions) {
    const action = actions[ob];

    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
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
