'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const type of actions) {
    for (const prop in type) {
      if (type[prop] === 'clear') {
        for (const props in state) {
          delete state[props];
        }
      } else if (type[prop] === 'addProperties') {
        Object.assign(state, type.extraData);
      } else if (type[prop] === 'removeProperties') {
        for (const ch of type.keysToRemove) {
          delete state[ch];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
