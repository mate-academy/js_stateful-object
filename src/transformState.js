'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  function deleteParam(params) {
    delete state[params];
  }

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);

        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          deleteParam(key);
        }

        break;

      case 'clear':
        for (const key in state) {
          deleteParam(key);
        }

        break;

      default:
        throw new Error('Unknown command');
    }
  }
}
module.exports = transformState;
