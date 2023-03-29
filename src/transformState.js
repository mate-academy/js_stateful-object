'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const actionType = actions[i];
    const type = actionType.type;

    switch (type) {
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'addProperties':
        const extraData = actionType.extraData;

        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        const keysToRemove = actionType.keysToRemove;

        for (const key of keysToRemove) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Wrong input!');
    }
  }
}

module.exports = transformState;
