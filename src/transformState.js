"use strict";
function transformState(state, actions) {
  for (const action of actions) {
    if (action.type === "addProperties") {
      if (typeof action.extraData === "object") {
        state = { ...state, ...action.extraData };
      }
    } else if (action.type === "removeProperties") {
      if (Array.isArray(action.keysToRemove)) {
        state = Object.keys(state)
          .filter((key) => !action.keysToRemove.includes(key))
          .reduce((newState, key) => {
            newState[key] = state[key];
            return newState;
          }, {});
      }
    } else if (action.type === "clear") {
      state = {};
    }
  }
  return state;
}

module.exports = transformState;
