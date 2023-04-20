'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultArray = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete state[key];
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
