'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const obj of actions) {
    if (obj.type === 'addProperties') {
      Object.assign(state, obj.extraData);
    }

    if (obj.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }

    if (obj.type === 'removeProperties') {
      for (const key in state) {
        for (const arrElem of obj.keysToRemove) {
          if (arrElem === key) {
            delete state[key];
          }
        }
      }
    }
  }

  return state;
}

module.exports = transformState;
