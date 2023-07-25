'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const AddProperties = 'addProperties';
  const Clear = 'clear';
  const RemoveProperties = 'removeProperties';

  for (const action of actions) {
    const { extraData, type, keysToRemove } = action;

    switch (type) {
      case AddProperties:
        Object.assign(state, extraData);
        break;

      case Clear:
        for (const key in state) {
          delete state[key];
        }
        break;

      case RemoveProperties:
        for (const key of keysToRemove) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
