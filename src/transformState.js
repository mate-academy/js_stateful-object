'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const stateCopy = state;
  const removeKey = function(actionObject) {
    for (const keyToRemove of actionObject.keysToRemove) {
      delete stateCopy[keyToRemove];
    }
  };

  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'clear':
        for (const key in stateCopy) {
          if (key) {
            delete stateCopy[key];
          }
        }
        break;
      case 'addProperties':
        Object.assign(stateCopy, action.extraData);
        break;
      case 'removeProperties':
        removeKey(action);
        break;
    }
  }

  return stateCopy;
}

module.exports = transformState;
