'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const el of actions) {
    switch (el.type) {
      case 'addProperties':
        Object.assign(state, el.extraData);
        break;
      case 'removeProperties':
        for (const element of el.keysToRemove) {
          delete state[element];
        }
        break;
      case 'clear':
        Object.keys(state).forEach(element => {
          delete state[element];
        });
    }
  }

  return state;
}

module.exports = transformState;
