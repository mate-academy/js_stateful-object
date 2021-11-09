'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (true) {
      case
        obj.type === 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case
        obj.type === 'removeProperties':
        for (const keys of obj.keysToRemove) {
          delete state[keys];
        }
        break;

      case
        obj.type === 'clear':
        for (const i in state) {
          delete state[i];
        }
    }
  }
}

module.exports = transformState;
