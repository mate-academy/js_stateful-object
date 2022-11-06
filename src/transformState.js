'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  function addProperties(obj, propToAdd) {
    for (const key in propToAdd) {
      obj[`${key}`] = propToAdd[key];
    }
  }

  function removeProperties(obj, propToRemove) {
    for (const key of propToRemove) {
      if (obj.hasOwnProperty(`${key}`)) {
        delete obj[`${key}`];
      }
    }
  }

  function clear(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(`${key}`)) {
        delete obj[`${key}`];
      }
    }
  }

  for (const key of actions) {
    if (key.type === 'addProperties') {
      addProperties(state, key.extraData);
    } else if (key.type === 'removeProperties') {
      removeProperties(state, key.keysToRemove);
    } else if (key.type === 'clear') {
      clear(state);
    }
  }

  return state;
}

module.exports = transformState;
