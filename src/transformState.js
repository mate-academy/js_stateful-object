'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act in actions) {
    const operation = actions[act];

    if (operation.type === 'addProperties') {
      Object.assign(state, operation.extraData);
    };

    if (operation.type === 'removeProperties') {
      for (const property in operation.keysToRemove) {
        delete state[operation.keysToRemove[property]];
      };
    };

    if (operation.type === 'clear') {
      for (const property in state) {
        delete state[property];
      }
    };
  };

  return state;
};

module.exports = transformState;
