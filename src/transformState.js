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
        for (const property of act.keysToRemove) {
          delete state[property];
        }
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        }
        break;

      default:
        throw Error('Action type ERROR');
    }
  }

  return state;
}

module.exports = transformState;
