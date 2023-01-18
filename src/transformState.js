'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  // write code here
  const result = state;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i]['type'] === 'addProperties') {
      const extraData = actions[i]['extraData'];

      for (const key in extraData) {
        result[key] = extraData[key];
      };
    };

    if (actions[i]['type'] === 'removeProperties') {
      const keysToRemove = actions[i]['keysToRemove'];

      for (let j = 0; j < keysToRemove.length; j++) {
        for (const key in result) {
          if (keysToRemove[j] === key) {
            delete result[key];
          };
        };
      };
    };

    if (actions[i]['type'] === 'clear') {
      for (const key in result) {
        delete result[key];
      };
    };
  };
};

module.exports = transformState;
