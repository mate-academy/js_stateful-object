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
        for (const property of action.keysToRemove) {
          if (state[property]) {
            delete state[property];
          }
        }
        break;

      default:
        const objKeys = Object.keys(state);

        objKeys.forEach(key => {
          delete state[key];
        });
    }
  }
}

module.exports = transformState;
