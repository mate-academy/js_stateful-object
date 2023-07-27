'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const currentAction of actions) {
    switch (currentAction.type) {
      case 'addProperties':
        const extraData = currentAction.extraData;

        Object.assign(state, extraData);

        break;

      case 'removeProperties':
        const keysToRemove = currentAction.keysToRemove;

        for (const key of keysToRemove) {
          // is it not easier this way, than with object destructuring?
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('incorrect type');
    }
  }
}

module.exports = transformState;
