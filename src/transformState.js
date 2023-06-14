'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (let i = 0; i < actions.length; i++) {
    switch (actions[i].type) {
      case 'addProperties':
        addProperties(state, actions[i].extraData);
        break;
      case 'removeProperties':
        removeProperties(state, actions[i].keysToRemove);
        break;
      case 'clear':
        Object.keys(state).forEach(key => delete state[key]);
    }
  }
}

function removeProperties(baseObj, keys) {
  for (let i = 0; i < keys.length; i++) {
    delete baseObj[keys[i]];
  }
}

function addProperties(baseObj, properties) {
  for (const property in properties) {
    baseObj[property] = properties[property];
  }
}

module.exports = transformState;
