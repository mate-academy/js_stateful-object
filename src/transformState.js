'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let objectIndex = 0; objectIndex < actions.length; objectIndex++) {
    const getArraysObject = actions[objectIndex];

    if (getArraysObject.type === 'addProperties') {
      for (const key in getArraysObject.extraData) {
        state[key] = getArraysObject.extraData[key];
      }
    } else if (getArraysObject.type === 'removeProperties') {
      for (let keyIndex = 0; keyIndex < getArraysObject.keysToRemove.length;
        keyIndex++) {
        delete state[getArraysObject.keysToRemove[keyIndex]];
      }
    } else if (getArraysObject.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
  }

  return state;
}

module.exports = transformState;
