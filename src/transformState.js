'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 */
function transformState(state, actions) {
  actions.forEach(element => {
    for (const key in element) {
      switch (element[key]) {
        case 'addProperties':
          for (const key2 in element.extraData) {
            state[key2] = element.extraData[key2];
          };
          break;

        case 'removeProperties':
          for (const key2 in element.keysToRemove) {
            delete state[element.keysToRemove[key2]];
          };
          break;

        case 'clear':
          for (const key2 in state) {
            delete state[key2];
          }
          break;

        default:
          break;
      }
    }
  });

  return state;
}

module.exports = transformState;
