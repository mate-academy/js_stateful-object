"use strict";

function transformState(state, actions) {
  const newState = { ...state };

  for (const action of actions) {
    if (action.type === "addProperties") {
      if (typeof action.extraData === "object") {
        for (const key in action.extraData) {
          newState[key] = action.extraData[key];
        }
      }
    } else if (action.type === "removeProperties") {
      if (Array.isArray(action.keysToRemove)) {
        for (const key of action.keysToRemove) {
          if (newState.hasOwnProperty(key)) {
            delete newState[key];
          }
        }
      }
    } else if (action.type === "clear") {
      for (const key in newState) {
        delete newState[key];
      }
    }
  }

  return newState;
}

module.exports = transformState;
