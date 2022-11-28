'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    } else if (obj.type === 'clear') {
      for (const prop in state) {
        delete state[prop];
      }
    } else if (obj.type === 'removeProperties') {
      if (obj.keysToRemove.length === 0) {
        return;
      }

      const keys = Object.keys(state);

      for (let i = 0; i < obj.keysToRemove.length; i++) {
        for (let j = 0; j < keys.length; j++) {
          if (obj.keysToRemove[i] === keys[j]) {
            delete state[keys[j]];
          }
        }
      }
    }
  }
}

module.exports = transformState;
