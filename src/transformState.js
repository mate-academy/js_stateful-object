'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const elem of transforms) {
    const { operation, properties } = elem;
    if (operation === 'addProperties') {
      addPropertiesToObject(state, properties);
    }
    if (operation === 'removeProperties') {
      removePropertiesFromObject(state, properties);
    }
    if (operation === 'clear') {
      clearObject(state);
    }
  }
}

function addPropertiesToObject(object, properties) {
  for (const key in properties) {
    if (properties.hasOwnProperty(key)) {
      object[key] = properties[key];
    }
  }
}

function removePropertiesFromObject(object, properties) {
  for (const elem of properties) {
    delete object[elem];
  }
}

function clearObject(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      delete object[key];
    }
  }
}

module.exports = transformState;
