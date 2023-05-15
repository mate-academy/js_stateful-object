'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function deleteParam(state, params) {
  delete state[params];
}

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          deleteParam(state, key);
        }

        break;

      case 'clear':
        for (const key in state) {
          deleteParam(state, key);
        }

        break;

      default:
        throw new Error(`${action.type} is not defined !`);
    }
  }
}
module.exports = transformState;
