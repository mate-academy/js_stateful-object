'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const transformed = state;
  const actionRemoveProperties = 'removeProperties';
  const actionClear = 'clear';
  const actionAddProperties = 'addProperties';

  for (const action of actions) {
    switch (action.type) {
      case actionAddProperties:
        Object.assign(transformed, action.extraData);
        break;

      case actionClear:
        for (const keyToClear in transformed) {
          delete transformed[keyToClear];
        }
        break;

      case actionRemoveProperties:
        for (const property of action.keysToRemove) {
          delete transformed[property];
        }
        break;

      default:
    }
  }
}

module.exports = transformState;
