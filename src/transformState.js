'use strict';

/**
 * @param {objectect} state
 * @param {objectect[]} actions
 */

function transformState(state, actions) {
  for (const object of actions) {
    switch (object.type) {
      case 'addProperties':
        for (const property in object.extraData) {
          state[property] = object.extraData[property];
        }
        break;

      case 'removeProperties':
        for (const property of object.keysToRemove) {
          if (property in state) {
            delete state[property];
          }
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;

      default:
        throw new Error('Unknown type');
    }
  }
}

module.exports = transformState;
