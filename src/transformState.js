'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  let copy = Object.assign(state);

  for (let i = 0; i < actions.length; i++) {
    const obj = actions[i];

    if (obj.type === 'addProperties') {
      copy = Object.assign(copy, obj.extraData);
    }

    if (obj.type === 'removeProperties') {
      const arr = obj.keysToRemove;

      for (let b = 0; b < arr.length; b++) {
        for (const key in copy) {
          if (key === arr[b]) {
            delete copy[key];
          }
        }
      }
    }

    if (obj.type === 'clear') {
      for (const key1 in copy) {
        delete copy[key1];
      }
    }
  }

  return copy;
}

module.exports = transformState;
