'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let changedState = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties': {
        changedState = Object.assign(changedState, action.extraData);
        break;
      }

      case 'removeProperties': {
        for (const key of action.keysToRemove) {
          delete changedState[key];
        }
        break;
      }

      case 'clear': {
        for (const property in changedState) {
          delete changedState[property];
        }
        break;
      }

      default:
        throw new Error('Unknown action');
    }
  }
}

module.exports = transformState;
