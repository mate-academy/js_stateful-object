'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const add = action.extraData;
    const remove = action.keysToRemove;

    switch (action.type) {
      case 'addProperties':
        for (const x in add) {
          state[x] = add[x];
        }
        break;

      case 'removeProperties':
        for (const ch of remove) {
          if (ch in state) {
            delete state[ch];
          }
        }
        break;

      case 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;
    }
  }
}

module.exports = transformState;
