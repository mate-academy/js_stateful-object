'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let actionsObject = {};
  let value = '';

  for (const ch of actions) {
    actionsObject = ch;
    Object.assign(state, actionsObject.extraData);

    for (const key in actionsObject.keysToRemove) {
      value = actionsObject.keysToRemove[key];

      for (const key2 in state) {
        if (value === key2) {
          delete state[key2];
        }
      }
    }

    for (const key3 in state) {
      if (actionsObject.type === 'clear') {
        delete state[key3];
      }
    }
  }
}

module.exports = transformState;
