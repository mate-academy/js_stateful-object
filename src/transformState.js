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
        for (const key of action.keysToRemove) {
          Reflect.deleteProperty(state, key);
        }
        break;
      case 'clear':
        for (const parameter in state) {
          Reflect.deleteProperty(state, parameter);
        }
        break;
    }
  }
}

module.exports = transformState;
