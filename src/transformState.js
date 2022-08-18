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

    switch (obj.type) {
      case 'addProperties' :
        copy = Object.assign(copy, obj.extraData);
        break;

      case 'removeProperties' :

        for (const key of obj.keysToRemove) {
          delete copy[key];
        };
        break;

      case 'clear' :
        for (const key1 in copy) {
          delete copy[key1];
        }
        break;
    }
  }

  return copy;
}

module.exports = transformState;
