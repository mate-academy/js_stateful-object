'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        Object.assign(result, action.extraData);
        break;

      case 'removeProperties' :
        for (const key of action.keysToRemove) {
          delete result[key];
        }
        break;

      case 'clear' :
        for (const key in result) {
          delete result[key];
        }
        break;
    }
  }

  return result;
}

module.exports = transformState;
