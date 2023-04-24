'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const copy = { ...state };

  if (actions.type === 'addProperties') {
    Object.assign(copy, actions.extraData);
  }

  if (actions.type === 'removeProperties') {
    actions.keysToRemove.forEach(key => {
      delete copy[key];
    });
  }

  if (actions.type === 'clear') {
    Object.keys(copy).forEach(key => {
      delete copy[key];
    });
  }

  return copy;
}

module.exports = transformState;
