'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].type === 'addProperties') {
      const extraData = actions[i].extraData;

      for (const key in extraData) {
        state[key] = extraData[key];
      };
    };

    if (actions[i].type === 'removeProperties') {
      const keysToRemove = actions[i].keysToRemove;

      for (let j = 0; j < keysToRemove.length; j++) {
        for (const key in state) {
          if (keysToRemove[j] === key) {
            delete state[key];
          };
        };
      };
    };

    if (actions[i].type === 'clear') {
      for (const key in state) {
        delete state[key];
      };
    };
  };
};

module.exports = transformState;
