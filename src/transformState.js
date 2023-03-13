'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  const obj = state;

  actions.forEach(element => {
    if (element['type'] === 'clear') {
      for (const key in obj) {
        delete obj[key];
      }
    } else if (element['type'] === 'removeProperties') {
      element['keysToRemove'].forEach(prop => {
        delete obj[prop];
      });
    } else {
      Object.assign(obj, element['extraData']);
    }
  });

  return obj;
}

module.exports = transformState;
