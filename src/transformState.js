'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(result, action.extraData);
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete result[key];
      }
    } else if (action.type === 'clear') {
      for (const key in result) {
        delete result[key];
      }
    }
  }

  return result;
}

module.exports = transformState;
