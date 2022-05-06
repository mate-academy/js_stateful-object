'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let resultObject = state;

  for (const { operation, properties } of transforms) {
    switch (operation) {
      case 'addProperties':
        resultObject = Object.assign(resultObject, properties);
        break;
      case 'removeProperties':
        for (const property of properties) {
          delete resultObject[property];
        };
        break;
      case 'clear':
        for (const property in resultObject) {
          delete resultObject[property];
        };
        break;
    }
  }

  return resultObject;
}

module.exports = transformState;
