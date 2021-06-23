'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const commandForAdd = 'addProperties';
  const commandForRemove = 'removeProperties';
  const commandForClear = 'clear';

  for (const action of actions) {
    switch (action.type) {
      case commandForAdd:
        Object.assign(state, action.extraData);
        break;

      case commandForRemove:
        for (const key of action.keysToRemove) {
          delete state[key];
        }
        break;

      case commandForClear:
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
