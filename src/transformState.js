'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const err1 = Error('Something went wrong');

  for (const act of actions) {
    switch (act.type) {
      case 'addProperties':
        Object.assign(state, act.extraData);
        break;

      case 'removeProperties':
        for (const removeKeys of act.keysToRemove) {
          delete state[removeKeys];
        }
        break;

      // eslint-disable-next-line no-fallthrough
      case 'clear':
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;

      default:
        throw err1;
    }
  }

  return state;
}

module.exports = transformState;
