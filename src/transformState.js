'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'addProperties':
        Object.assign(state, extraData);
        break;
      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case 'removeProperties':
        keysToRemove.forEach(propKey => {
          if (state.hasOwnProperty(propKey)) {
            delete state[propKey];
          }
        });
        break;
      default:
        continue;
    }
  };
}

module.exports = transformState;
