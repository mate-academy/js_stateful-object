'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(result, action.extraData);
        break;

      case 'clear':
        for (const key in result) {
          delete result[key];
        }
        break;

      case 'removeProperties':
        for (const keys in result) {
          if (action.keysToRemove.toString().includes(keys)) {
            delete result[keys];
          }
        }
        break;
    }
  }

  return (result);
}

module.exports = transformState;
