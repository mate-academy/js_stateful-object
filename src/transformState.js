'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const transformed = [];

  for (const object of actions) {
    switch (object.type) {
      case 'addProperties': {
        Object.assign(state, object.extraData);
        transformed.push(state);
        break;
      }

      case 'clear': {
        for (const item in state) {
          delete state[item];
        }
        transformed.push({});
        break;
      }

      case 'removeProperties': {
        for (const remove of object.keysToRemove) {
          delete state[remove];
        }
        transformed.push(state);
        break;
      }

      default:
        return object.type;
    }
  }

  return transformed;
}

module.exports = transformState;
