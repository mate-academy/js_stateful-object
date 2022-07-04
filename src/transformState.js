'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const element of actions) {
    if (element.type === 'addProperties') {
      Object.assign(state, element['extraData']);
    } else if (element.type === 'removeProperties') {
      for (const removeProperti of element['keysToRemove']) {
        delete state[removeProperti];
      }
    } else if (element.type === 'clear') {
      for (const stateElement in state) {
        delete state[stateElement];
      }
    }
  }

  return state;
}

module.exports = transformState;
