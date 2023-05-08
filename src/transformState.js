'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const newObj = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        Object.assign(newObj, action.extraData);
        break;
      }

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          delete newObj[key];
        }
        break;
      }

      case 'clear': {
        Object.keys(newObj).forEach(key => delete newObj[key]);
        break;
      }

      default: {
        return newObj;
      }
    }
  }

  return newObj;
}

module.exports = transformState;
