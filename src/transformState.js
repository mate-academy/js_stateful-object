'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */

function transformState(state, actions) {
  for (const action of actions) {
    let addStatus = false;
    let removeStatus = false;
    let clearStatus = false;

    for (const actionValue in action) {
      if (addStatus) {
        Object.assign(state, action[actionValue]);
        addStatus = false;
      }

      if (removeStatus) {
        for (const keysToRemove of action[actionValue]) {
          for (const key in state) {
            if (key === keysToRemove) {
              delete state[keysToRemove];
            }
          }
        }
        removeStatus = false;
      }

      if (action[actionValue] === 'addProperties') {
        addStatus = true;
      } else if (action[actionValue] === 'removeProperties') {
        removeStatus = true;
      } else if (action[actionValue] === 'clear') {
        clearStatus = true;
      }

      if (clearStatus) {
        for (const key in state) {
          delete state[key];
        }
        clearStatus = false;
      }
    }
  }

  return state;
}

module.exports = transformState;
