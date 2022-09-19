'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const changed = state;
  const actionRemoveProperties = 'removeProperties';
  const actionClear = 'clear';
  const actionAddProperties = 'addProperties';

  for (const action of actions) {
    switch (action.type) {
      case actionAddProperties:
        Object.assign(changed, action.extraData);
        break;

      case actionClear:
        for (const keyToClear in changed) {
          delete changed[keyToClear];
        }
        break;

      case actionRemoveProperties:
        for (const property of action.keysToRemove) {
          delete changed[property];
        }
        break;
    }
  }
}

module.exports = transformState;
