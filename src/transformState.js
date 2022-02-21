'use strict';
/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  // write code here
  for (const elementsOfAction of actions) {
    if (elementsOfAction.type === 'addProperties') {
      Object.assign(state, elementsOfAction.extraData);
      }
    if (elementsOfAction.type === 'removeProperties') {
      for (let keys of elementsOfAction.keysToRemove) {
        delete state[keys];
      }
    }
    if (elementsOfAction.type === 'clear') {
      for (const keys in state) {
        delete state[keys];
      }
    }
  }
  return state;
}

module.exports = transformState;