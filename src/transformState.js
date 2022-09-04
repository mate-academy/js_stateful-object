'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  for (const act in actions) {
    const operation = actions[act];

    switch (operation.type) {
      case 'addProperties':
        Object.assign(state, operation.extraData);
        break;

      case 'removeProperties':
        for (const property in operation.keysToRemove) {
          delete state[operation.keysToRemove[property]];
        };
        break;

      case 'clear':
        for (const property in state) {
          delete state[property];
        };
        break;

      default:
        break;
    };
  };

  return state;
};

module.exports = transformState;
