'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

// The function returns a new copy of the object with changes
function transformState(state, actions) {
  if (isObject(state)) {
    throw new Error('State is not an object');
  }

  if (isObject(actions)) {
    throw new Error('Actions is not an object');
  }

  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case 'addProperties':
        const { extraData } = action;

        addProperties(state, extraData);
        break;

      case 'removeProperties':
        const { keysToRemove } = action;

        removeProperties(state, keysToRemove);
        break;

      case 'clear':
        clear(state);
        break;

      default:
        throw new Error('Invalid type property');
    }
  }

  return { ...state };
}

function isObject(value) {
  return typeof value !== 'object' || value === null;
}

function addProperties(state, data) {
  for (const key in data) {
    state[key] = data[key];
  }
}

// remove properties contain in data
function removeProperties(state, data) {
  for (const key of data) {
    // chek if state has a key from data
    const hasKeyProperty = Object.prototype.hasOwnProperty.call(state, key);

    if (hasKeyProperty) {
      delete state[key];
    }
  }
}

// delete all properties of object
function clear(state) {
  for (const key in state) {
    delete state[key];
  }
}

module.exports = transformState;
