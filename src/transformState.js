'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  let stateCopy = state;

  for (const action of actions) {
    switch (action['type']) {
      case 'addProperties':
        stateCopy = Object.assign(state, action['extraData']);
        break;
      case 'removeProperties':
        for (const keyToRemove of action['keysToRemove']) {
          delete stateCopy[keyToRemove];
        }
        break;

      case 'clear':
        for (const key in stateCopy) {
          if (stateCopy.hasOwnProperty(key)) {
            delete stateCopy[key];
          }
        }
    }
  }

  return stateCopy;
}

module.exports = transformState;
