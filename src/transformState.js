'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(state, action.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;

      case 'clear':
        removeProperties(state, Object.keys(state));
        break;
    }
  }
}

/**
 * @param {Object} source
 * @param {String[]} keys
 */
function removeProperties(source, keys) {
  for (const key of keys) {
    delete source[key];
  }
}

module.exports = transformState;
