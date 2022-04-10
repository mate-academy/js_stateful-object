'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const result = state;
  let arrToRemove;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      Object.assign(result, action.extraData);
    }

    if (action.type === 'removeProperties') {
      arrToRemove = action.keysToRemove;

      for (const elem of arrToRemove) {
        for (const key in result) {
          if (key === elem) {
            delete result[key];
          }
        }
      }
    }

    if (action.type === 'clear') {
      for (const elem in result) {
        delete result[elem];
      }
    }
  }

  return result;
}

module.exports = transformState;
