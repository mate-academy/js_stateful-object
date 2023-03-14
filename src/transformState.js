'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const currentObject of actions) {
    switch (currentObject.type) {
      case 'addProperties':
        Object.assign(state, currentObject.extraData);
        break;
      case 'removeProperties':
        currentObject.keysToRemove.forEach(elem => delete state[elem]);
        break;

      case 'clear':
        toClearState(state);
        break;
      default:
        return null;
    }
  }

  return state;
}

function toClearState(state) {
  for (const elem in state) {
    delete state[elem];
  }
}
module.exports = transformState;
