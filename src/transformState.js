"use strict";

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  for (const action of actions) {
    switch (action.type) {
      case "clear":
        for (const del in state) {
          delete state[del];
        }
        break;

      case "addProperties":
        Object.assign(state, action.extraData);
        break;

      case "removeProperties":
        for (const key of action.keysToRemove) {
          delete state[key];
        }
    }
  }

  return state;
}

module.exports = transformState;
