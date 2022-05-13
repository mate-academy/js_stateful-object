'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const actionsObject = action;
    let removeValue = '';

    if (actionsObject.type === 'addProperties') {
      Object.assign(state, actionsObject.extraData);
    }

    for (const removeKey in actionsObject.keysToRemove) {
      removeValue = actionsObject.keysToRemove[removeKey];

      if (actionsObject.type === 'removeProperties') {
        delete state[removeValue];
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
