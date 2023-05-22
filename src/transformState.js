'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addFirstProperty(state, action.extraData);
        break;
      case 'removeProperties':
        removeFirstProperty(state, action.keysToRemove);
        break;
      case 'clear':
        clearFirstProperty(state);
        break;
      default:
        return;
    }
  }
}

/**
 * @param {Object} target
 * @param {Object} properties
 */
function addFirstProperty(target, properties) {
  const propertiesKeys = Object.keys(properties);

  if (propertiesKeys.length === 0) {
    return;
  }

  const key = propertiesKeys[0];
  const value = Object.values(properties)[0];

  target[key] = value;
  delete properties[key];
  addFirstProperty(target, properties);
}

/**
 * @param {Object} target
 * @param {string[]} properties
 */
function removeFirstProperty(target, properties) {
  if (properties.length === 0) {
    return;
  }

  delete target[properties[0]];
  properties.shift();
  removeFirstProperty(target, properties);
}

/**
 * @param {Object} target
 */
function clearFirstProperty(target) {
  const targetKeys = Object.keys(target);

  if (targetKeys.length === 0) {
    return;
  }

  delete target[targetKeys[0]];
  clearFirstProperty(target);
}

module.exports = transformState;
