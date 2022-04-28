'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act of actions) {
    switch (true) {
      case act.type === 'addProperties':
        Object.assign(state, act.extraData);
        break;

      case act.type === 'removeProperties':
        for (const extra of act.keysToRemove) {
          delete state[extra];
        }
        break;

      case act.type === 'clear':
        for (const del in state) {
          delete state[del];
        }
        break;
    }
  }
}

module.exports = transformState;
