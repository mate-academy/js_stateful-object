'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const isAddProperties = 'addProperties';
  const isRemoveProperties = 'removeProperties';
  const isClear = 'clear';

  for (const obj of actions) {
    if (obj.type === isAddProperties) {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === isRemoveProperties) {
      obj.keysToRemove.forEach(elem => delete state[elem]);
    }

    if (obj.type === isClear) {
      for (const elem in state) {
        delete state[elem];
      }
    }
  }

  return state;
}
module.exports = transformState;
