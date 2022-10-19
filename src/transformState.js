'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const action of actions) {
    const type = action.type; // string with type property
    const addValues = action.extraData; // object with extra data
    const removeValues = action.keysToRemove; // array with remove keys

    switch (type) {
      case 'addProperties':
        for (const value in addValues) {
          state[value] = addValues[value];
        }
        break;

      case 'removeProperties':
        for (const value of removeValues) {
          delete state[value];
        }
        break;

      case 'clear':
        for (const value in state) {
          delete state[value];
        }
        break;
    }
  }

  return state;
}

module.exports = transformState;
