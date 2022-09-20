'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const object of actions) {
    switch (true) {
      case (object.type === 'addProperties'):
        Object.assign(state, object.extraData);
        break;

      case (object.type === 'removeProperties'):
        for (const el of object.keysToRemove) {
          delete state[el];
        };
        break;

      case (object.type === 'clear'):
        for (const key in state) {
          if (state.hasOwnProperty(key)) {
            delete state[key];
          }
        }
    }
  }

  return state;
}

module.exports = transformState;
