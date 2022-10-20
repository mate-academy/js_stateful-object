'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const prop of actions) {
    switch (prop.type) {
      case 'addProperties':
        Object.assign(state, prop.extraData);

        break;

      case 'removeProperties':
        for (const elem of prop.keysToRemove) {
          delete state[elem];
        }
        break;

      case 'clear':
        for (const props in state) {
          delete state[props];
        }

        break;
    }
  }

  return state;
}

module.exports = transformState;
