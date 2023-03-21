'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    const action = act;

    switch (action.type) {
      case 'addProperties':
        const extraData = action.extraData;

        for (const key in extraData) {
          if (extraData.hasOwnProperty(key)) {
            state[key] = extraData[key];
          }
        }
        break;

      case 'removeProperties':
        const keysToRemove = action.keysToRemove;

        for (const removeKey of keysToRemove) {
          const key = removeKey;

          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;
      case 'clear':
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
        break;

      default: {
        throw new Error('Error');
      }
    }
  }
}

module.exports = transformState;
