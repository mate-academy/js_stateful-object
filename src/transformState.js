'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const resultArr = state;

  for (const action in actions) {
    const type = actions[action];

    for (const key in type) {
      const values = type[key];

      if (values === 'addProperties') {
        for (const property in type.extraData) {
          resultArr[property] = type.extraData[property];
        }
      }

      if (values === 'removeProperties') {
        for (const property in type.keysToRemove) {
          delete resultArr[type.keysToRemove[property]];
        }
      }

      if (values === 'clear') {
        for (const member in resultArr) {
          delete resultArr[member];
        }
      }
    }
  }

  return resultArr;
}

module.exports = transformState;
