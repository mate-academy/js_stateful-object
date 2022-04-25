'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const property of actions) {
    switch (property.type) {
      case 'addProperties':
        Object.assign(state, property.extraData);
        break;

      case 'removeProperties':
        property.keysToRemove
          .forEach(key => delete state[key]);
        break;

      case 'clear':
        Object.keys(state)
          .forEach(key => delete state[key]);
        break;

      default:
        return `Please provide valid data`;
    }
  }

  return state;
}

module.exports = transformState;
