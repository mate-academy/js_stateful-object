'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (let i = 0; i < actions.length; i++) {
    const action = Object.assign({}, actions[i]);

    for (const key in action) {
      if (action[key] === 'addProperties') {
        Object.assign(state, action.extraData);
      } else if (action[key] === 'removeProperties') {
        for (let keyRem = 0; keyRem < action.keysToRemove.length; keyRem++) {
          for (const x in state) {
            if (x === action.keysToRemove[keyRem]) {
              delete state[x];
            }
          }
        }
      } else if (action[key] === 'clear') {
        for (const y in state) {
          delete state[y];
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
