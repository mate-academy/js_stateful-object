'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const objects of actions) {
    if (objects.type === 'addProperties') {
      for (const keys in objects.extraData) {
        state[keys] = objects.extraData[keys];
      }
    } else if (objects.type === 'removeProperties') {
      for (const remove of objects.keysToRemove) {
        delete state[remove];
      }
    } else {
      for (const deleteAll in state) {
        delete state[deleteAll];
      }
    }
  }

  return state;
}

module.exports = transformState;
