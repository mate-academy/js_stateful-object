'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        for (const res of act.keysToRemove) {
          delete state[res];
        }
        break;

      case 'clear':
        for (const clea in state) {
          delete state[clea];
        }
        break;
    }
  }
}

module.exports = transformState;
