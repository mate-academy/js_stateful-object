'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultArray = [];

  for (let i = 0; i < actions.length; i++) {
    switch (true) {
      case actions[i].type === 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case actions[i].type === 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete state[actions[i].keysToRemove[j]];
        };

        break;

      default:
        for (const item in state) {
          delete state[item];
        }
    }

    resultArray.push({
      ...state,
    });
  }

  return resultArray;
}

module.exports = transformState;
