'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const object of transforms) {
    switch (object['operation']) {
      case 'addProperties': {
        for (const prop in object['properties']) {
          state[prop] = object['properties'][prop];
        }
        break;
      }

      case 'removeProperties': {
        for (const prop of object['properties']) {
          delete state[prop];
        }
        break;
      }

      case 'clear': {
        for (const prop in state) {
          delete state[prop];
        }
        break;
      }

      default: {
        return 'Invalid case';
      }
    }
  }
};

module.exports = transformState;
