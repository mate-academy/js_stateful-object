'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function addProperties(object, objectModifier) {
  for (const key in objectModifier) {
    object[key] = objectModifier[key];
  }

  return object;
};

function removeProperties(object, objectModifier) {
  for (const key of objectModifier) {
    delete object[key];
  }

  return object;
};

function clearAll(object) {
  for (const key in object) {
    delete object[key];
  }

  return object;
};

function transformState(state, actions) {
  for (const index of actions) {
    if (index.type === 'addProperties') {
      addProperties(state, index.extraData);
    }

    if (index.type === 'removeProperties') {
      removeProperties(state, index.keysToRemove);
    }

    if (index.type === 'clear') {
      clearAll(state);
    }
  }

  return state;
};

module.exports = transformState;
