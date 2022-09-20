'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const key in actions) {
    const obj = actions[key];

    switch (true) {
      case (obj.type === 'addProperties'):
        Object.assign(state, obj.extraData);
        break;

      case (obj.type === 'clear'):
        for (const stateKey in state) {
          delete state[stateKey];
        }
        break;

      case (obj.type === 'removeProperties'):
        for (const word of obj.keysToRemove) {
          delete state[word];
        }
        break;

      default:
        break;
    }
  }
}
module.exports = transformState;
