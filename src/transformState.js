'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    // the function changes the given object `state` according to the
    // specified conditions in `actions` array of objects
    switch (action.type) {
      case 'addProperties':
        for (const property in action.extraData) {
          const value = action.extraData[property];

          state[property] = value;
        }
        break;
      case 'removeProperties':
        for (const propertyName of action.keysToRemove) {
          delete state[propertyName];
        }
        break;
      case 'clear':
        for (const propertyName in state) {
          delete state[propertyName];
        }
        break;
    }
  }
}

module.exports = transformState;
