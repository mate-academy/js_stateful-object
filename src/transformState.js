'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach((action) => {
    const actionArray = Object.entries(action);
    const instruction = actionArray[0][1];

    switch (true) {
      case instruction === 'clear':
        for (const key in state) {
          delete state[key];
        }
        break;
      case instruction === 'addProperties':
        for (const key in actionArray[1][1]) {
          state[key] = actionArray[1][1][key];
        }
        break;
      case instruction === 'removeProperties':
        for (const key in actionArray[1][1]) {
          delete state[actionArray[1][1][key]];
        }
        break;

      default:
        break;
    }
  });
}

module.exports = transformState;
