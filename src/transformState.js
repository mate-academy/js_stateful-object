"use strict";

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    switch (obj.type) {
      case "addProperties":
        for (const keys in obj.extraData) {
          state[keys] = obj.extraData[keys];
        }
        break;

      case "removeProperties":
        for (const key of obj.keysToRemove) {
          delete state[key];
        }

        break;

      default:
        for (const del in state) {
          delete state[del];
        }
    }
  }
  return state;
}

module.exports = transformState;
