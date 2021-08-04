'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const arrayOfActionsValue = Object.values(actions);

  for (const item of arrayOfActionsValue) {
    switch (item.type) {
      case 'addProperties':
        Object.assign(state, item.extraData);
        break;

      case 'removeProperties':
        for (const removeItem of item.keysToRemove) {
          delete state[removeItem];
        }
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }
}

module.exports = transformState;
