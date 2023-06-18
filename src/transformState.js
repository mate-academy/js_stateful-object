"use strict";

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const obj of actions) {
    if (obj.type === "addProperties") {
      for (const keys in obj.extraData) {
        state[keys] = obj.extraData[keys];
      }
    }

    if (obj.type === "removeProperties") {
      for (const key of obj.keysToRemove) {
        delete state[key];
      }
    }

    if (obj.type === "clear") {
      for (const del in state) {
        delete state[del];
      }
    }
  }
  return state;
}

module.exports = transformState;
