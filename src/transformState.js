'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const { type } = actions[i];

    switch (type) {
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;

      case 'addProperties':
        const extraData = actions[i].extraData;

        for (const [key, value] of Object.entries(extraData)) {
          state[key] = value;
        }
        break;

      case 'removeProperties':
        const keysToRemove = actions[i].keysToRemove;

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
