'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (true) {
      case action.type === 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case action.type === 'removeProperties':

        const remove = action.keysToRemove;

        for (const index in remove) {
          delete state[remove[index]];
        }
        break;

      case action.type === 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
