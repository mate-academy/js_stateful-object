"use strict";

function transformState(state, actions) {
  for (const action of actions) {
    const { type } = action;

    switch (type) {
      case "addProperties":
        const { extraData } = action;
        if (extraData) {
          Object.assign(state, extraData);
        }
        break;

      case "removeProperties":
        const { keysToRemove } = action;
        if (keysToRemove) {
          for (const key of keysToRemove) {
            delete state[key];
          }
        }
        break;

      case "clear":
        Object.keys(state).forEach((key) => {
          delete state[key];
        });
        break;

      default:
        break;
    }
  }
}

module.exports = transformState;
