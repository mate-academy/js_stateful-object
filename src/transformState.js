'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case 'addProperties':
        Object.assign(state, obj.extraData);
        break;

      case 'removeProperties':
        for (const el of obj.keysToRemove) {
          if (state.hasOwnProperty(el)) {
            delete state[el];
          }
        }
        break;

      case 'clear':
        for (const deletedItem in state) {
          delete state[deletedItem];
        };
        break;
    }
  }
}

module.exports = transformState;
