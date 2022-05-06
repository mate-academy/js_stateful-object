'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let actionsObject = {};
  let valueToRemove = '';

  for (const action of actions) {
    actionsObject = action;

    if (actionsObject.type === 'addProperties') {
      Object.assign(state, actionsObject.extraData);
    }

    for (const keyToRemove in actionsObject.keysToRemove) {
      valueToRemove = actionsObject.keysToRemove[keyToRemove];

      if (actionsObject.type === 'removeProperties') {
        delete state[valueToRemove];
      }
    }

    for (const key in state) {
      if (actionsObject.type === 'clear') {
        delete state[key];
      }
    }
  }
}

module.exports = transformState;
