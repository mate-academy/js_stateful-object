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
        for (const element of obj.keysToRemove) {
          if (state.hasOwnProperty(element)) {
            delete state[element];
          }
        }
        break;

      case 'clear':
        for (const deleteEl in state) {
          delete state[deleteEl];
        }
        break;
    }
  }
}

module.exports = transformState;
