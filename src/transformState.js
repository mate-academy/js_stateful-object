'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const force of actions) {
    switch (force.type) {
      case 'addProperties':
        Object.assign(state, force.extraData);
        break;

      case 'removeProperties':
        for (const key of force.keysToRemove) {
          delete state[key];
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
