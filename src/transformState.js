'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
*/

function transformState(state, actions) {
  const stateModified = state;

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(stateModified, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete stateModified[key];
        }
        break;

      case 'clear':
        for (const key in stateModified) {
          delete stateModified[key];
        }
        break;

      case 'default':
        throw new Error(`No ${action.type} action type found`);
    }
  }

  return stateModified;
}

module.exports = transformState;
