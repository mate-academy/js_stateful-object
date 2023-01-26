'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultArray = [];

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      for (const item in actions[i].extraData) {
        state[item] = actions[i].extraData[item];
      }

      resultArray.push({
        ...state,
      });
    } else if (actions[i].type === 'removeProperties') {
      for (let j = 0; j < actions[i].keysToRemove.length; j++) {
        delete state[actions[i].keysToRemove[j]];
      }

      resultArray.push({
        ...state,
      });
    } else {
      for (const item in state) {
        delete state[item];
      }

      resultArray.push({
        ...state,
      });
    }
  }

  return resultArray;
}

module.exports = transformState;
