'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const toRemove = [];

  for (const elemment of actions) {
    switch (elemment['type']) {
      case 'addProperties':
        Object.assign(state, elemment['extraData']);
        break;
      case 'removeProperties':
        Object.assign(toRemove, elemment['keysToRemove']);
        break;
      case 'clear':
        for (const entries in state) {
          delete state[entries];
        }
        break;
    }

    for (let i = 0; i < toRemove.length; i++) {
      delete state[toRemove[i]];
    }
  }

  return state;
}

module.exports = transformState;
