'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  if (actions.length === 0) {
    return state;
  }

  for (const property of actions) {
    switch (property.type) {
      case 'removeProperties':
        for (const action of property.keysToRemove) {
          delete state[action];
        }
        break;
      case 'addProperties':
        Object.assign(state, property.extraData);
        break;

      case 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
