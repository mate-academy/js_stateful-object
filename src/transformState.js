'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
// write code here
  actions.forEach(stage => {
    if (stage.type === 'addProperties') {
      for (const keyToAdd in stage.extraData) {
        state[keyToAdd] = stage.extraData[keyToAdd];
      }
    } else if (stage.type === 'removeProperties') {
      stage.keysToRemove.forEach(keyToRemove => {
        delete state[keyToRemove];
      });
    } else if (stage.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    }
  });

  return state;
}

module.exports = transformState;
