'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const step of actions) {
    switch (step.type) {
      case 'addProperties':
        Object.assign(state, step.extraData);
        break;
      case 'removeProperties':
        for (const key of step.keysToRemove) {
          delete state[key];
        }
        break;
      case 'clear':
        for (const key of Object.keys(state)) {
          delete state[key];
        }
        break;
    }
  }
}
module.exports = transformState;
