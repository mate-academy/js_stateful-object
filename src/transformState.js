'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultArray = [];

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        Object.assign(state, actions[i].extraData);
        break;

      case 'removeProperties':
        for (let j = 0; j < actions[i].keysToRemove.length; j++) {
          delete state[actions[i].keysToRemove[j]];
        };

        break;

      default:
        for (const item in state) {
          delete state[item];
        }
    }

    resultArray.push(state);
  }

  return resultArray;
}

module.exports = transformState;
