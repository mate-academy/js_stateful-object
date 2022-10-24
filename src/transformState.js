'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // At first I've created such function for case `clear`.
  // Is it OK for this task or better use only cycle?
  // function deleteAllProperties(state) {
  //   for (const key in state) {
  //     delete state[key];
  //   }
  // }
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case `removeProperties`:
        for (const key of action.keysToRemove) {
          delete state[key];
        }

        break;

      case `clear`:
        for (const key in state) {
          delete state[key];
        }

        break;

      default:
        // Is it ok to leave default empty?
        throw new Error('Error');
    }
  }

  return state;
}

module.exports = transformState;
