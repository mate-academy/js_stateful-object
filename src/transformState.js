'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
const removeKey = (action, data) => {
  const { keysToRemove } = action;

  for (const keyToRemove of keysToRemove) {
    delete data[keyToRemove];
  }
};
const clearProperties = (action, data) => {
  for (const key in data) {
    delete data[key];
  }
};

function transformState(state, actions) {
  const stateCopy = state;

  for (const action of actions) {
    const { type, extraData } = action;

    switch (type) {
      case 'clear':
        clearProperties(action, stateCopy);
        break;
      case 'addProperties':
        Object.assign(stateCopy, extraData);
        break;
      case 'removeProperties':
        removeKey(action, stateCopy);
        break;
    }
  }

  return stateCopy;
}

module.exports = transformState;
