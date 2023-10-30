"use strict";
function transformState(state, actions) {
  let newState = { ...state };
  for (const action of actions) {
    if (action.type === "addProperties") {
      if (typeof action.extraData === "object") {
        newState = { ...newState, ...action.extraData };
      }
    } else if (action.type === "removeProperties") {
      if (Array.isArray(action.keysToRemove)) {
        newState = Object.keys(newState)
          .filter((key) => !action.keysToRemove.includes(key))
          .reduce((filteredState, key) => {
            filteredState[key] = newState[key];
            return filteredState;
          }, {});
      }
    } else if (action.type === "clear") {
      newState = {};
    }
  }

  return newState;
}

module.exports = transformState;
