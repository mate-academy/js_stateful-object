'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const currentObject of actions) {
    for (const key in currentObject) {
      switch (currentObject[key]) {
        case 'addProperties':
          Object.assign(state, currentObject.extraData);
          break;

        case 'removeProperties':
          const deleteKeys = currentObject.keysToRemove;

          for (const ch of deleteKeys) {
            delete state[ch];
          }
          break;

        case 'clear':
          for (const keyObject in state) {
            delete state[keyObject];
          }
          break;
      }
    }
  }

  return state;
}

module.exports = transformState;
