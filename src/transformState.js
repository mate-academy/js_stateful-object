
'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key of actions) {
    switch (key.type) {
      case 'addProperties':
        Object.assign(state, key.extraData);
        break;

      case 'removeProperties':
        for (const i of key.keysToRemove) {
          delete state[i];
        }
        break;

      case 'clear':
        for (const x in state) {
          delete state[x];
        };
    }
  }

  return state;
}
module.exports = transformState;
