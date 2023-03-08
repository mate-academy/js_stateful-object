'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        };
        break;

      case 'removeProperties':
        const remove = action.keysToRemove;

        for (const i in remove) {
          delete state[remove[i]];
        }
        break;

      default :
        break;
    }
  }

  return state;
}
module.exports = transformState;
