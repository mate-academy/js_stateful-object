'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  let stateLoc = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      stateLoc = {
        ...stateLoc, ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        if (stateLoc[keyToRemove]) {
          delete stateLoc[keyToRemove];
        }
      }
    }

    if (action.type === 'clear') {
      stateLoc = {};
    }
  }

  return stateLoc;
}

module.exports = transformState;
