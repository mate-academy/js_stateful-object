'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const transformedState = state;

  const addProperties = 'addProperties';
  const removeProperties = 'removeProperties';
  const clear = 'clear';

  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case addProperties:
        Object.assign(transformedState, extraData);
        break;

      case removeProperties:
        for (const key of keysToRemove) {
          delete transformedState[key];
        }
        break;

      case clear:
        for (const key in transformedState) {
          delete transformedState[key];
        }
        break;

      default:
        return `type is not found`;
    }
  }

  return transformedState;
}

module.exports = transformState;
