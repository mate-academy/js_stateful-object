'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (true) {
      case obj['type'] === 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case obj['type'] === 'removeProperties' :
        for (const index of obj.keysToRemove) {
          delete state[index];
        }
        break;

      case obj['type'] === 'clear':
        for (const key in state) {
          delete state[key];
        }
    }
  }
}

module.exports = transformState;
