'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(action => {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        const removeKeys = action.keysToRemove.values();

        for (const key of removeKeys) {
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
        return state;
    }
  });

  return state;
}

module.exports = transformState;
